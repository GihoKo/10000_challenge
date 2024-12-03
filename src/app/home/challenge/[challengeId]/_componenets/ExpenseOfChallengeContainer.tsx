import Expense from "@/app/home/expenses/_components/Expense/Expense";
import { ExpenseOfChallengeContainerProps } from "./ExpenseOfChallengeContainer.type";

export default function ExpenseOfChallengeContainer({
    expenses,
}: ExpenseOfChallengeContainerProps) {
    return (
        <ul className="flex flex-col gap-2">
            {expenses.map((expense) => (
                <Expense key={expense.id} expense={expense} />
            ))}
        </ul>
    );
}
