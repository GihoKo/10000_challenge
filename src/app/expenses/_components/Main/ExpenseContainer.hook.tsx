import supabaseClient from "@/supabase/supabaseClient";
import { ExpenseData } from "@/types/expense";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useExpenseContainer() {
    const [expenses, setExpenses] = useState<ExpenseData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    const getExpenses = async () => {
        setIsLoading(true);

        const { data: expenses, error } = await supabaseClient
            .from("expense")
            .select("*");

        if (error) {
            throw new Error(error.message);
        }

        return expenses;
    };

    const handleClickExpense = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => {
        const expenseId = event.currentTarget.dataset.id;

        router.push(`/expenses/edit/${expenseId}`);
    };

    useEffect(() => {
        getExpenses()
            .then((expenses) => {
                setExpenses(expenses);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return { expenses, isLoading, error, handleClickExpense };
}
