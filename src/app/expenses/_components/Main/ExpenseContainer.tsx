"use client";

import useExpenseContainer from "./ExpenseContainer.hook";
import Expense from "./Expense";
import { ExpenseResponse } from "@/types/expense";

export default function ExpenseContainer() {
    const { expenses, isLoading, error } = useExpenseContainer();

    if (isLoading) {
        return <div>데이터를 불러오는 중 입니다...</div>;
    }

    if (error) {
        return <div>데이터 가져오기를 실패했습니다. 재시도해주세요.</div>;
    }

    return (
        <ul className="flex flex-col gap-2">
            {expenses.map((expense: ExpenseResponse) => (
                <Expense key={expense.id} expense={expense} />
            ))}
        </ul>
    );
}
