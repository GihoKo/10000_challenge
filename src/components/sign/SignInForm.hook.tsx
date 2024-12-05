import { FieldValues, useForm } from "react-hook-form";
import { signIn } from "./actions";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import setUserDataInSessionStorage from "@/utils/setUserDataInSessionStorage";

export default function useSignInForm() {
    const router = useRouter();
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
                setUserDataInSessionStorage(response?.user as User);
                router.push("/home");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return { control, errors, register, handleSubmit, onSubmit };
}
