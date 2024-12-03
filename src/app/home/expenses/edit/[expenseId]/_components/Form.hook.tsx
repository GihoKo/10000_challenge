import { updateExpense } from "@/apis/services/expense";
import supabaseClient from "@/supabase/client";
import { ExpenseData } from "@/types/expense";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function useForm() {
    const { expenseId } = useParams();
    const router = useRouter();
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpense({
            ...expense,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setExpense({
            ...expense,
            [e.target.name]: e.target.value,
        });
    };

    const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateExpense(expenseId as string, {
            description: expense.description,
            category: expense.category,
            amount: expense.amount,
        })
            .then(() => {
                router.push("/home/expenses");
            })
            .catch((error) => {
                console.error(error);
                setIsError(true);
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
        handleInputChange,
        handleSelectChange,
        handleEdit,
    };
}
