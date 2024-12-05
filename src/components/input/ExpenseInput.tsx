import { FieldValues, UseFormRegister } from "react-hook-form";

export default function ExpenseInput({
    type,
    id,
    register,
}: {
    type: "text" | "number" | "date";
    id: "description" | "amount" | "date";
    register: UseFormRegister<FieldValues>;
}) {
    if (id === "description") {
        return (
            <input
                className="border border-gray-300 rounded-md w-full px-3 py-2 text-sm focus:border-blue-600"
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

    if (id === "amount") {
        return (
            <input
                className="border border-gray-300 rounded-md w-full px-3 py-2 text-sm focus:border-blue-600"
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

    if (id === "date") {
        return (
            <input
                className="border border-gray-300 rounded-md w-full px-3 py-2 text-sm focus:border-blue-600"
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
}
