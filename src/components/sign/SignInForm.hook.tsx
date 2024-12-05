import { FieldValues, useForm } from "react-hook-form";
import { signIn } from "./actions";
import { useRouter } from "next/navigation";
import { UserMetadata } from "@supabase/supabase-js";
import { useUserStore } from "@/stores/userStore";
import supabaseClient from "@/supabase/client";

export default function useSignInForm() {
    const router = useRouter();
    const { setUser } = useUserStore();
    const {
        control,
        formState: { errors },
        register,
        handleSubmit,
    } = useForm<FieldValues>({
        mode: "onBlur",
    });

    const onSubmit = (data: FieldValues) => {
        const formData = new FormData();

        formData.append("email", data.email);
        formData.append("password", data.password);

        signIn(formData)
            .then((response) => {
                if (response?.success) {
                    setUser(response.user as UserMetadata);
                    supabaseClient.auth.setSession(response.session);
                    router.push("/home");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return { control, errors, register, handleSubmit, onSubmit };
}
