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

    return { value, handleChangeEmail, handleChangePassword };
}
