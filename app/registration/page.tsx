// src/app/register/page.tsx
import { Metadata } from "next";
import RegisterForm from "../ui/signup/signup-form";

export const metadata: Metadata = {
    title: "Регистрация",
};

export default function RegisterPage() {
    return (
        <main className="flex min-h-screen items-center justify-center p-4">
            <div className="w-full max-w-md rounded-lg bg-gray-50 p-6 shadow">
                <RegisterForm />
            </div>
        </main>
    );
}