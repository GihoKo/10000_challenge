"use server";

import { createClient } from "@/supabase/server";

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
        success: true,
        user: response.data.user.user_metadata,
        session: response.data.session,
    };
}

export async function signUp(formData: FormData) {
    const newUser = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        user_name: formData.get("user_name") as string,
    };

    try {
        const response = await fetch("http://localhost:3000/api/signUp", {
            method: "POST",
            body: JSON.stringify(newUser),
        });

        const responseData = await response.json();

        if (responseData.error) {
            return {
                success: false,
                message: responseData.message,
            };
        }

        return {
            success: true,
            user: {
                id: responseData.data.id,
                email: responseData.data.email,
                user_name: responseData.data.user_name,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: "회원가입에 실패했습니다.",
        };
    }
}
