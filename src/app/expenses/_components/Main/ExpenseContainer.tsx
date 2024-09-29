"use client";

import supabaseClient from "@/supabase/supabaseClient";
import { ExpenseResponse } from "@/types/expense";
import { useEffect, useState } from "react";
import Expense from "./Expense";

export default function ExpenseContainer() {
    const [expenses, setExpenses] = useState<ExpenseResponse[]>([]);

    const getExpenses = async () => {
        const { data: expenses, error } = await supabaseClient
            .from("expense")
            .select("*");

        if (error) {
            console.error(error);
        }

        return expenses;
    };

    useEffect(() => {
        getExpenses().then((expenses) => {
            if (!expenses) return;

            setExpenses(expenses);
        });
    }, []);

    return (
        <ul className="flex flex-col gap-2">
            {expenses.map((expense: ExpenseResponse) => (
                <Expense key={expense.id} expense={expense} />
            ))}
        </ul>
    );
}
