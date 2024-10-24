import { getExpensesByDate } from "@/apis/services/expense";
import { ExpenseData } from "@/types/expense";
import { useState } from "react";
import Expense from "../Expense/Expense";

// 범용적으로 사용하려면 어떻게?
export default function ExpenseContainerFetchErrorFallback() {
    const [expenses, setExpenses] = useState<ExpenseData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(true);

    const handleReset = () => {
        setIsLoading(true);
        setIsError(false);

        getExpensesByDate()
            .then((response) => {
                if (response) {
                    setExpenses(response);
                }
            })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    if (isError) {
        return (
            <div>
                <div>데이터를 가져오지 못했습니다.</div>
                <button onClick={handleReset}>재요청</button>
            </div>
        );
    }

    if (isLoading) {
        return <div>데이터를 불러오는 중 입니다...</div>;
    }

    return (
        <ul className="flex flex-col gap-2">
            {expenses.map((expense: ExpenseData) => (
                <Expense key={expense.id} expense={expense} />
            ))}
        </ul>
    );
}
