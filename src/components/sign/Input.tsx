import { FieldValues, UseFormRegister } from "react-hook-form";

export default function Input({
    type,
    id,
    register,
}: {
    type: "email" | "password";
    id: string;
    register: UseFormRegister<FieldValues>;
}) {
    if (type === "email") {
        return (
            <input
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-blue-600"
                type={type}
                id={id}
                {...register(id, {
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
