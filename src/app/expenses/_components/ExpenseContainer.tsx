"use client";

import useExpenseContainer from "./ExpenseContainer.hook";
import Expense from "./Expense";
import { ExpenseData } from "@/types/expense";

export default function ExpenseContainer() {
    const { expenses } = useExpenseContainer();

    return (
        <div>
            <ul className="flex flex-col gap-2">
                {expenses.map((expense: ExpenseData) => (
                    <Expense key={expense.id} expense={expense} />
                ))}
            </ul>
        </div>
    );
}
