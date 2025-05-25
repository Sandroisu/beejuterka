"use client";

import Link from "next/link";
import { useActionState } from "react";
import { requestSignUp, SignUpState } from "@/lib/actions/request-sign-up";

export default function RegisterForm() {
    const initial: SignUpState = { error: "" };
    const [state, action, isPending] = useActionState<SignUpState, FormData>(
        requestSignUp,
        initial
    );

    return (
        <form action={action} className="space-y-4">
            <h2 className="text-xl font-semibold">Зарегистрироваться</h2>

            <div>
                <label htmlFor="email" className="block text-sm">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded border px-3 py-2"
                />
            </div>

            <div>
                <label htmlFor="name" className="block text-sm">Имя (необязательно)</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="mt-1 w-full rounded border px-3 py-2"
                />
            </div>

            <div>
                <label htmlFor="password" className="block text-sm">Пароль</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    minLength={6}
                    required
                    className="mt-1 w-full rounded border px-3 py-2"
                />
            </div>

            <div>
                <label htmlFor="confirm" className="block text-sm">Подтвердите пароль</label>
                <input
                    id="confirm"
                    name="confirm"
                    type="password"
                    minLength={6}
                    required
                    className="mt-1 w-full rounded border px-3 py-2"
                />
            </div>

            {state.error && (
                <p className="text-red-600" role="alert">
                    {state.error}
                </p>
            )}

            <button
                type="submit"
                disabled={isPending}
                className="w-full rounded bg-blue-600 py-2 text-white disabled:opacity-50"
            >
                {isPending ? "Регистрация…" : "Зарегистрироваться"}
            </button>

            <p className="text-center text-sm">
                Уже есть аккаунт?{" "}
                <Link href="/auth" className="text-blue-600 underline">
                    Войти
                </Link>
            </p>
        </form>
    );
}
