import { useState } from "react";
import { SignUpFormValue } from "./SignUpForm.type";
import { useRouter } from "next/navigation";
import supabaseClient from "@/supabase/supabaseClient";

export default function useSignUpForm() {
    const [value, setValue] = useState<SignUpFormValue>({
        email: "",
        password: "",
        passwordConfirm: "",
        userName: "",
    });

    const router = useRouter();

    const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({ ...value, userName: e.target.value });
    };

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({ ...value, email: e.target.value });
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({ ...value, password: e.target.value });
    };

    const handleChangePasswordConfirm = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setValue({ ...value, passwordConfirm: e.target.value });
    };

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userData = {
            email: value.email,
            password: value.password,
            options: {
                data: {
                    user_name: value.userName,
                },
            },
        };

        const { data, error } = await supabaseClient.auth.signUp(userData);

        if (error) {
            console.log(`회원가입 실패: ${error.message}`);
        }

        if (data) {
            console.log(`회원가입 성공: ${data.user?.id}`);
            router.push("/dashboard");
        }
    };

    return {
        value,
        handleChangeEmail,
        handleChangePassword,
        handleChangePasswordConfirm,
        handleSignUp,
        handleChangeUserName,
    };
}
