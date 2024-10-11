import { ExpenseData } from "@/types/expense";
import Expense from "./Expense";
import { getExpensesByDate } from "@/apis/services/expense";
import ExpenseContainerFetchErrorFallback from "./ExpenseContainerFetchErrorFallBack";

export async function ExpenseContainerOnServer() {
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
        return <ExpenseContainerFetchErrorFallback />;
    }
}
