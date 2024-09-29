import supabaseClient from "@/supabase/supabaseClient";
import { ExpenseResponse } from "@/types/expense";
import { useEffect, useState } from "react";

export default function useExpenseContainer() {
    const [expenses, setExpenses] = useState<ExpenseResponse[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

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

    return { expenses, isLoading, error };
}
