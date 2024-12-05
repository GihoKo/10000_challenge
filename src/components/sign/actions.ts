"use server";

import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export async function signIn(formData: FormData) {
    const supabase = createClient();

    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };

    const response = await supabase.auth.signInWithPassword(data);

    if (response.error) {
        return console.log(response.error.message);
    }

    return {
        user: response.data.user,
    };
}

export async function signUp(formData: FormData) {
    const supabase = createClient();

    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        options: {
            data: {
                user_name: formData.get("user_name") as string,
            },
        },
    };

    const response = await supabase.auth.signUp(data);

    if (response.error) {
        return console.log(response.error.message);
    }

    return {
        user: response.data.user,
    };
}
