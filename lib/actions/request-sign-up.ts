"use server"

import { hash } from "bcryptjs";
import { prisma } from '@/lib/prisma';
import { redirect } from "next/navigation";

export interface SignUpState {
    error?: string
}

export async function requestSignUp(state: SignUpState, formData: FormData): Promise<SignUpState> {
    const email = formData.get("email") as string;
    const name = (formData.get("name") as string)?.trim || null;
    const password = formData.get("password") as string;
    const confirm = formData.get("confirm") as string;
    const redirectTo = (formData.get("redirectTo") as string) || "/auth";

    if (!email || !password || password.length < 6) {
        return { error: "Необходимо ввести email и пароль(минимум 6 символов)" };
    }

    if (password !== confirm) {
        return { error: "Пароли не совпадают" };
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
        return { error: "Пользователь с таким email уже существует" };
    }

    const hashed = await hash(password, 12);
    await prisma.user.create({
        data: {
            email: email,
            password: hashed,
            name: name()
        }
    });

    redirect(redirectTo)
}