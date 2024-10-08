import { useState } from "react";
import { SignInFormValue } from "./SignInForm.type";
import { useRouter } from "next/navigation";
import supabaseClient from "@/supabase/client";

export default function useSignInForm() {
    const [value, setValue] = useState<SignInFormValue>({
        email: "",
        password: "",
    });

    const router = useRouter();

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({ ...value, email: e.target.value });
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({ ...value, password: e.target.value });
    };

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userData = {
            email: value.email,
            password: value.password,
        };

        const response = await fetch("/api/auth/", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        console.log(data);
    };

    return { value, handleSignIn, handleChangeEmail, handleChangePassword };
}
