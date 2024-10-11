import { ExpenseData } from "@/types/expense";
import Expense from "./Expense";
import { getExpensesByDate } from "@/apis/services/expense";

export async function ExpenseContainerServerComponent() {
    try {
        const expenses = await getExpensesByDate();

        return (
            <div>
                <ul className="flex flex-col gap-2">
                    {expenses.map((expense: ExpenseData) => (
                        <Expense key={expense.id} expense={expense} />
                    ))}
                </ul>
            </div>
        );
    } catch (error) {
        return <div>데이터를 불러오지 못했습니다. 새로고침해주세요...</div>;
    }
}
