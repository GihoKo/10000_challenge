import { EXPENSE_MOCKDATA, ExpenseMockData } from "@/mocks";
import Expense from "./Expense";

export default function ExpenseContainer() {
    return (
        <ul className="flex flex-col gap-2">
            {EXPENSE_MOCKDATA.map((expense: ExpenseMockData) => (
                <Expense key={expense.id} expense={expense} />
            ))}
        </ul>
    );
}
