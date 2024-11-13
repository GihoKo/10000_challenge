import { ExpenseData } from "@/types/expense";
import Expense from "../Expense/Expense";
import { getExpensesByDate } from "@/apis/services/expense";

export async function ExpenseContainerOnServer() {
    try {
        const expenses = await getExpensesByDate();

        if (expenses.length === 0) {
            return (
                <div className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg">
                    오늘은 지출이 없네요.
                </div>
            );
        }

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
        return <div>데이터를 가져오지 못했습니다.</div>;
    }
}
