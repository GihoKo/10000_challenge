import supabaseClient from "@/supabase/supabaseClient";
import { ExpenseData } from "@/types/expense";
import { useEffect, useState } from "react";

export interface UpdatedExpense {
    description: string;
    category: string;
    amount: number;
}

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

    const updateExpense = async (
        expenseId: string | null,
        updatedExpense: UpdatedExpense
    ) => {
        const { data, error } = await supabaseClient
            .from("expense")
            .update(updatedExpense)
            .eq("id", expenseId)
            .select();

        if (error) {
            throw new Error(error.message);
        }

        // description, category, amount만 업데이트하도록 변경함
        setExpenses(
            expenses.map((expense) => {
                if (expense.id === expenseId) {
                    return {
                        ...expense,
                        description: updatedExpense.description,
                        category: updatedExpense.category,
                        amount: updatedExpense.amount,
                    };
                }
                return expense;
            })
        );

        return data;
    };

    const deleteExpense = async (expenseId: string | null) => {
        const { error } = await supabaseClient
            .from("expense")
            .delete()
            .eq("id", expenseId);

        if (error) {
            throw new Error(error.message);
        }

        setExpenses(expenses.filter((expense) => expense.id !== expenseId));
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
        updateExpense,
        deleteExpense,
        handleClickExpense,
        handleModalClose,
    };
}
