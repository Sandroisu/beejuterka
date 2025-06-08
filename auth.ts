
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from '@/lib/prisma';
import { AuthError } from 'next-auth';
import bcrypt from 'bcryptjs';

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
                    throw new AuthError('Требуется ввести логин и пароль');
                }
                const mail = credentials.email as string
                const password = credentials.password as string
                console.log(credentials.email)
                const user = await prisma.user.findUnique({
                    where: { email: mail },
                });

                if (!user) {
                    throw new AuthError('Пользователь не найден');
                }
                const passwordMatch = await bcrypt.compare(password, user.password);
                if (!passwordMatch) {
                    throw new AuthError("Неправильная пара логин пароль")
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