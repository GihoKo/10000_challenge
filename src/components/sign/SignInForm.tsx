"use client";

import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import { DevTool } from "@hookform/devtools";
import useSignInForm from "./SignInForm.hook";
import InputErrorMessage from "../ErrorMessage/InputErrorMessage";

export default function SignInForm() {
    const { control, errors, register, handleSubmit, onSubmit } =
        useSignInForm();

    return (
        <form
            className="flex flex-col gap-6 p-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
        >
            <div className="flex flex-col gap-4">
                <Label htmlFor="email" text="이메일">
                    <Input id="email" type="email" register={register} />
                    {errors.email && (
                        <InputErrorMessage
                            message={errors.email.message as string}
                        />
                    )}
                </Label>

                <Label htmlFor="password" text="비밀번호">
                    <Input id="password" type="password" register={register} />
                    {errors.password && (
                        <InputErrorMessage
                            message={errors.password.message as string}
                        />
                    )}
                </Label>
            </div>

            <Button text="로그인" type="submit" />
            <DevTool control={control} />
        </form>
    );
}
