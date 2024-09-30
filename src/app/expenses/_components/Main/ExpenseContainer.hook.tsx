import supabaseClient from "@/supabase/supabaseClient";
import { ExpenseData } from "@/types/expense";
import { useEffect, useState } from "react";

export default function useExpenseContainer() {
    const [expenses, setExpenses] = useState<ExpenseData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalExpenseId, setModalExpenseId] = useState<string | null>(null);

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

    const handleClickExpense = (expenseId: string) => {
        setModalExpenseId(expenseId);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setModalExpenseId(null);
        setIsModalOpen(false);
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

    return {
        expenses,
        isLoading,
        error,
        isModalOpen,
        modalExpenseId,
        handleClickExpense,
        handleModalClose,
    };
}
