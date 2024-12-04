"use client";

import { signIn } from "./actions";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import { DevTool } from "@hookform/devtools";
import useSignInForm from "./SignInForm.hook";

export default function SignInForm() {
    const { register, control } = useSignInForm();

    return (
        <form className="flex flex-col gap-6 p-6">
            <div className="flex flex-col gap-4">
                <Label htmlFor="email" text="이메일">
                    <Input id="email" type="email" register={register} />
                </Label>

                <Label htmlFor="password" text="비밀번호">
                    <Input id="password" type="password" register={register} />
                </Label>
            </div>

            <Button text="로그인" formAction={signIn} />
            <DevTool control={control} />
        </form>
    );
}
