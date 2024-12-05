import { FieldValues, useForm } from "react-hook-form";
import { signUp } from "./actions";
import { User } from "@supabase/supabase-js";
import setUserDataInSessionStorage from "@/utils/setUserDataInSessionStorage";
import { useRouter } from "next/navigation";

export default function useSignUpForm() {
    const router = useRouter();
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

        signUp(formData)
            .then((response) => {
                setUserDataInSessionStorage(response?.user as User);
                router.push("/home");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return {
        control,
        errors,
        register,
        handleSubmit,
        onSubmit,
    };
}
