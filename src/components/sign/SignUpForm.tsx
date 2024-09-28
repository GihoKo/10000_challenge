"use client";

import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import useSignUpForm from "./SIgnUpForm.hook";

export default function SignUpForm() {
    const {
        value,
        handleSignUp,
        handleChangeUserName,
        handleChangeEmail,
        handleChangePassword,
        handleChangePasswordConfirm,
    } = useSignUpForm();

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

            <Button type="submit" text="회원가입" />
        </form>
    );
}
