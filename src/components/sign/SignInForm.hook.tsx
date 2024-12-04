import { FieldValues, useForm } from "react-hook-form";

export default function useSignInForm() {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        mode: "onBlur",
    });

    return { register, control, handleSubmit, errors };
}
