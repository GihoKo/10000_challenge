import { createExpense } from "@/apis/services/expense";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";

export default function useMain() {
    const router = useRouter();
    const { user } = useUserStore();
    console.log(user);

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data: FieldValues) => {
        const newExpense = {
            category: data.category,
            description: data.description,
            amount: data.amount,
            date: data.date,
        };

        createExpense({ data: newExpense })
            .then(() => {
                router.push("/home/expenses");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
        control,
    };
}
