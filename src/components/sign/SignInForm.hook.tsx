import { useState } from "react";
import { SignInFormValue } from "./SignInForm.type";
import { useRouter } from "next/navigation";

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

        if (response.status === 200) {
            console.log("로그인 성공!");
            router.push("/home");
        }
    };

    return { value, handleSignIn, handleChangeEmail, handleChangePassword };
}
