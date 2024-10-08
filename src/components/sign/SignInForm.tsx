"use client";

import { login } from "./actions";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import useSignInForm from "./SignInForm.hook";

export default function SignInForm() {
    const { value, handleSignIn, handleChangeEmail, handleChangePassword } =
        useSignInForm();

    return (
        <form className="flex flex-col gap-6 p-6">
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

            <Button text="로그인" formAction={login} />
        </form>
    );
}
