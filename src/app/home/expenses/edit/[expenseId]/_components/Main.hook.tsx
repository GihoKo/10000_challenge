import { updateExpense } from "@/apis/services/expense";
import supabaseClient from "@/supabase/client";
import { ExpenseData } from "@/types/expense";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

export default function useMain() {
    const { expenseId } = useParams();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    const [expense, setExpense] = useState<ExpenseData>({
        id: "",
        date: "",
        category: "",
        description: "",
        amount: 0,
        user_id: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getExpense = useCallback(async () => {
        const { data: expense, error } = await supabaseClient
            .from("expense")
            .select("*")
            .eq("id", expenseId);

        if (error) {
            throw new Error(error.message);
        }

        return expense[0];
    }, [expenseId]);

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
        setIsLoading(true);

        getExpense()
            .then((expense) => {
                setExpense(expense);
            })
            .catch((error) => {
                console.error(error);
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [expenseId, getExpense]);

    return {
        isLoading,
        isError,
        expense,
        register,
        handleSubmit,
        onSubmit,
        errors,
        control,
    };
}
