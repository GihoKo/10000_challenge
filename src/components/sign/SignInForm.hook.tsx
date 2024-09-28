import { useState } from "react";
import { SignInFormValue } from "./SignInForm.type";
import { useRouter } from "next/navigation";
import supabaseClient from "@/supabase/supabaseClient";

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

        const { data, error } = await supabaseClient.auth.signInWithPassword(
            userData
        );

        if (error) {
            console.log(`로그인 실패: ${error.message}`);
        }

        if (data) {
            console.log(`로그인 성공: ${data.user?.id}`);
            router.push("/dashboard");
        }
    };
    return { value, handleSignIn, handleChangeEmail, handleChangePassword };
}
