import { FieldValues, useForm } from "react-hook-form";
import { signUp } from "./actions";

export default function useSignUpForm() {
    const {
        control,
        formState: { errors },
        register,
        handleSubmit,
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data: FieldValues) => {
        const formData = new FormData();

        formData.append("user_name", data.user_name);
        formData.append("email", data.email);
        formData.append("password", data.password);

        signUp(formData);
    };

    return {
        control,
        errors,
        register,
        handleSubmit,
        onSubmit,
    };
}
