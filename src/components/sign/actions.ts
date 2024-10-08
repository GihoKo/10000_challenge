"use server";

import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
    const supabase = createClient();

    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        return console.log(error);
    }

    redirect("/home");
}
