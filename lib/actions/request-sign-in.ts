"use server"

import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";

export interface SignInState { error?: string };

export async function requestSignIn(state: SignInState, formData: FormData): Promise<SignInState> {
    console.log(formData)
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const callbackUrl = (formData.get("redirectTo") as string) || "/";
    try {
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
            callbackUrl,
        });
        if (result?.error) {
            return { error: result.error }
        }
    } catch (e) {
        if (e instanceof AuthError) {
            return { error: e.message };
        }
        throw e;

    }

    redirect(callbackUrl);
}