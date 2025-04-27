
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/lib/prisma';

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
                    throw new Error('Email and password are required');
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                if (!user || user.password !== credentials.password) {
                    throw new Error('Invalid email or password');
                }

                return user;
            },
        }),
    ],
    pages: { signIn: "/auth", signOut: "/" },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
});