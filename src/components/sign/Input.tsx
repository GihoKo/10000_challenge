import EMAIL_REGEXP from "@/constants/EMAIL_REGEXP";
import { FieldValues, UseFormRegister } from "react-hook-form";

export default function Input({
    type,
    id,
    register,
}: {
    type: "text" | "email" | "password";
    id: string;
    register: UseFormRegister<FieldValues>;
}) {
    if (type === "text") {
        return (
            <input
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-blue-600"
                type={type}
                id={id}
                {...register(id, {
                    required: {
                        value: true,
                        message: "입력이 필요합니다.",
                    },
                })}
            />
        );
    }

    if (type === "email") {
        return (
            <input
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-blue-600"
                type={type}
                id={id}
                {...register(id, {
                    pattern: {
                        value: EMAIL_REGEXP,
                        message: "올바른 이메일을 입력해주세요.",
                    },
                })}
            />
        );
    }

    if (type === "password") {
        return (
            <input
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-blue-600"
                type={type}
                id={id}
                {...register(id, {
                    minLength: {
                        value: 8,
                        message: "비밀번호는 8자 이상으로 설정해주세요.",
                    },
                })}
            />
        );
    }
}
