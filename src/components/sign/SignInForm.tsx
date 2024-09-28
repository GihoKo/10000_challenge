"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import supabaseClient from "@/supabase/supabaseClient";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

interface SignInFormValue {
    email: string;
    password: string;
}

export default function SignInForm() {
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

    return (
        <form className="flex flex-col gap-6 p-6" onSubmit={handleSignIn}>
            <div className="flex flex-col gap-4">
                <Label htmlFor="email" text="이메일">
                    <Input
                        name="email"
                        type="email"
                        placeholder="이메일을 입력해주세요."
                        value={value.email}
                        onChange={handleChangeEmail}
                    />
                </Label>
                <Label htmlFor="password" text="비밀번호">
                    <Input
                        name="password"
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                        value={value.password}
                        onChange={handleChangePassword}
                    />
                </Label>
            </div>
            <Button type="submit" text="로그인" />
        </form>
    );
}
