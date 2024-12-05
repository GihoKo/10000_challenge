import { FieldValues, UseFormRegister } from "react-hook-form";

export default function ChallengeInput({
    type,
    id,
    register,
}: {
    type: "text" | "number" | "date";
    id: "name" | "resolution" | "dailySaving" | "goalDate";
    register: UseFormRegister<FieldValues>;
}) {
    if (id === "name") {
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

    if (id === "resolution") {
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

    if (id === "dailySaving") {
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

    if (id === "goalDate") {
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
