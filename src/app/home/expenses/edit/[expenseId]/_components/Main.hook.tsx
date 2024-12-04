import { getExpense, updateExpense } from "@/apis/services/expense";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";

export default function useMain() {
    const { expenseId } = useParams();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset, // reset은 전체를 초기화, setValue는 일부를 초기화
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

        updateExpense(expenseId as string, newExpense)
            .then(() => {
                router.push("/home/expenses");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getExpense({ expenseId }).then((expense) => {
            reset(expense);
        });
    }, [expenseId, reset]);

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
        control,
    };
}
