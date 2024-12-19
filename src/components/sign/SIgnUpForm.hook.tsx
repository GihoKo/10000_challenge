import { FieldValues, useForm } from "react-hook-form";
import { signUp } from "./actions";
import { useRouter } from "next/navigation";
import { User, useUser } from "@/contexts/UserContext";

export default function useSignUpForm() {
    const router = useRouter();
    const { setUser } = useUser();
    const {
        control,
        formState: { errors },
        register,
        handleSubmit,
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = async (data: FieldValues) => {
        const formData = new FormData();

        formData.append("user_name", data.user_name);
        formData.append("email", data.email);
        formData.append("password", data.password);

        try {
            const response = await signUp(formData);

            if (response.errorMessage) {
                throw new Error(response.errorMessage);
            }

            if (response.status === 200) {
                setUser(response.user as User);

                router.push("/home");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return {
        control,
        errors,
        register,
        handleSubmit,
        onSubmit,
    };
}
