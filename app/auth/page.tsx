
import { Suspense } from 'react';
import { Metadata } from 'next';
import LoginForm from '../ui/login/login-form';

export const metadata: Metadata = {
    title: 'Authentication',
};

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <Suspense>
                    <LoginForm />
                </Suspense>
            </div>
        </main>
    );
}