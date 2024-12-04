"use client";

import { DevTool } from "@hookform/devtools";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import useSignUpForm from "./SIgnUpForm.hook";
import InputErrorMessage from "../ErrorMessage/InputErrorMessage";

export default function SignUpForm() {
    const { control, errors, register, handleSubmit, onSubmit } =
        useSignUpForm();

    return (
        <form
            className="flex flex-col gap-6 p-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
        >
            <div className="flex flex-col gap-4">
                <Label htmlFor="user_name" text="유저 이름">
                    <Input id="user_name" type="text" register={register} />
                    {errors.user_name && (
                        <InputErrorMessage
                            message={errors.user_name.message as string}
                        />
                    )}
                </Label>

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

                <Label htmlFor="passwordConfirm" text="비밀번호 확인">
                    <Input
                        id="passwordConfirm"
                        type="password"
                        register={register}
                    />
                    {errors.passwordConfirm && (
                        <InputErrorMessage
                            message={errors.passwordConfirm.message as string}
                        />
                    )}
                </Label>
            </div>

            <Button text="회원가입" type="submit" />

            <DevTool control={control} />
        </form>
    );
}
