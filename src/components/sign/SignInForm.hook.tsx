import { FieldValues, useForm } from "react-hook-form";
import { signIn } from "./actions";

export default function useSignInForm() {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        mode: "onBlur",
    });

    const onSubmit = (data: FieldValues) => {
        const formData = new FormData();

        formData.append("email", data.email);
        formData.append("password", data.password);

        signIn(formData);
    };

    return { control, errors, register, handleSubmit, onSubmit };
}
