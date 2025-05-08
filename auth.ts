
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from '@/lib/prisma';
import { AuthError } from 'next-auth';

export const { handlers, signIn, signOut, auth } = NextAuth({

    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'your-email@example.com' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req): Promise<any> {
                if (!credentials?.email || !credentials.password) {
                    throw new AuthError('Email and password are required');
                }
                const mail = credentials.email
                console.log(credentials.email)
                const user = await prisma.user.findUnique({
                    where: { email: mail },
                });

                if (!user || user.password !== credentials.password) {
                    throw new AuthError('Invalid email or password');
                }

                return user;
            },
        }),
    ],
    pages: { signIn: "/auth" },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.AUTH_SECRET,
});