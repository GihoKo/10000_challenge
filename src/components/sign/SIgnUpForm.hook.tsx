import { useState } from "react";
import { SignUpFormValue } from "./SignUpForm.type";
import { useRouter } from "next/navigation";
import supabaseClient from "@/supabase/client";

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

    return {
        value,
        handleChangeEmail,
        handleChangePassword,
        handleChangePasswordConfirm,
        handleChangeUserName,
    };
}
