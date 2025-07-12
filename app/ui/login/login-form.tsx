'use client';

import { rubik } from '@/app/ui/fonts';
import { useActionState, useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { requestSignIn, SignInState } from '@/lib/actions/request-sign-in';
import Link from "next/link"

export default function LoginForm() {
    const router = useRouter()
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/'
    const [error, setError] = useState('')
    const [pending, startTransition] = useTransition()
    //const [state, formAction, isPending] = useActionState<SignInState, FormData>(
    //  requestSignIn,
    //initalState,
    //);
    const action = (formData: FormData) => {
        startTransition(async () => {
            const res = await requestSignIn({}, formData)
            if (res.error) {
                const err = res.error || ""
                setError(err)
            } else {
                setError('')
                router.push('/');
                router.refresh();
                window.location.href = callbackUrl;
            }
        })
    }


    return (
        <form action={action} className="space-y-3">
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <h1 className={`${rubik.className} mb-3 text-2xl`}>
                    Авторизуйтесь чтобы продолжить
                </h1>
                <div className="w-full">
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Введите ваш email"
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Введите пароль"
                                required
                                minLength={6}
                            />
                        </div>
                    </div>
                </div>
                <input type="hidden" name="redirectTo" value={callbackUrl} />
                <button className="mt-4 w-full" aria-disabled={pending}>
                    Войти
                </button>
                <p className="mt-2 text-center text-sm">
                    Нет аккаунта?{" "}
                    <Link href="/registration" className="text-blue-600 underline">
                        Зарегистрироваться
                    </Link>
                </p>

                {error && (<p className="text-red-600">{error}</p>)}
                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true"
                >

                </div>
            </div>
        </form>
    );
}