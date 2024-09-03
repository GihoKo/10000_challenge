"use client";

import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

export default function SignUpForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit");
    };

    return (
        <form className="flex flex-col gap-6 p-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
                <Label text="이메일">
                    <Input type="email" placeholder="이메일을 입력해주세요." />
                </Label>
                <Label text="비밀번호">
                    <Input
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                    />
                </Label>
                <Label text="비밀번호 확인">
                    <Input
                        type="password"
                        placeholder="비밀번호를 한번 더 입력해주세요."
                    />
                </Label>
            </div>
            <Button type="submit" text="로그인" />
        </form>
    );
}
