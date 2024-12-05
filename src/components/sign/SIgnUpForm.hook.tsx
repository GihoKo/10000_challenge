import { FieldValues, useForm } from "react-hook-form";
import { signUp } from "./actions";
import { Session, UserMetadata } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/userStore";
import supabaseClient from "@/supabase/client";

export default function useSignUpForm() {
    const router = useRouter();
    const { setUser } = useUserStore();
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
                if (response?.success) {
                    setUser(response.user as UserMetadata);
                    supabaseClient.auth.setSession(response.session as Session);
                    router.push("/home");
                }
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
