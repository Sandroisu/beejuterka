"use server"

import { signOut } from "@/auth";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";

export interface LogOutState { error?: string };

export async function requestLogOut(state: LogOutState): Promise<LogOutState> {

    try {
        const result = await signOut();
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