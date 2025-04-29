"use server"

import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { error } from "console";

export interface SignInState { error?: string };

export async function requestSignIn(state: SignInState, formData: FormData): Promise<SignInState> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const callbackUrl = (formData.get("redirectTo") as string) || "/";

    const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl,
    });

    if (result?.error) {
        return { error: result.error }
    }


    redirect(callbackUrl);
}