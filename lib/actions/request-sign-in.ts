"use server"

import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { error } from "console";
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
    } catch (e) {// error under useUnknownInCatchVariables 
        if (typeof e === "string") {
            return { error: e } // works, `e` narrowed to string
        } else if (e instanceof Error) {
            return { error: e.message }// works, `e` narrowed to Error
        }
    }



    redirect(callbackUrl);
}