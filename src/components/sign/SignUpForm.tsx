"use client";

import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

interface SignUpFormValue {
    email: string;
    password: string;
    passwordConfirm: string;
}

export default function SignUpForm() {
    const [value, setValue] = useState<SignUpFormValue>({
        email: "",
        password: "",
        passwordConfirm: "",
    });

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit");
    };

    return (
        <form className="flex flex-col gap-6 p-6" onSubmit={handleSubmit}>
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
