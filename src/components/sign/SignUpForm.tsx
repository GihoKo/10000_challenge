"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import supabaseClient from "@/supabase/supabaseClient";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

interface SignUpFormValue {
    email: string;
    password: string;
    passwordConfirm: string;
    userName: string;
}

export default function SignUpForm() {
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

    return (
        <form className="flex flex-col gap-6 p-6" onSubmit={handleSignUp}>
            <div className="flex flex-col gap-4">
                <Label htmlFor="user_name" text="유저 이름">
                    <Input
                        name="user_name"
                        type="text"
                        placeholder="유저 이름을 입력해주세요."
                        value={value.userName}
                        onChange={handleChangeUserName}
                    />
                </Label>

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
                <Label htmlFor="passwordConfirm" text="비밀번호 확인">
                    <Input
                        name="passwordConfirm"
                        type="password"
                        placeholder="비밀번호를 한번 더 입력해주세요."
                        value={value.passwordConfirm}
                        onChange={handleChangePasswordConfirm}
                    />
                </Label>
            </div>
            <Button type="submit" text="로그인" />
        </form>
    );
}
