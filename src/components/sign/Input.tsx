import { FieldValues, UseFormRegister } from "react-hook-form";

export default function Input({
    type,
    id,
    register,
}: {
    type: string;
    id: string;
    register: UseFormRegister<FieldValues>;
}) {
    return (
        <input
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-blue-600"
            type={type}
            id={id}
            {...register(id)}
        />
    );
}
