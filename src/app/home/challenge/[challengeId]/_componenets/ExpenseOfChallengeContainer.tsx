import Expense from "@/app/expenses/_components/Expense";
import { ExpenseOfChallengeContainerProps } from "./ExpenseOfChallengeContainer.type";

export default function ExpenseOfChallengeContainer({
    expenses,
}: ExpenseOfChallengeContainerProps) {
    return (
        <div className="flex flex-col gap-2">
            {expenses.map((expense) => (
                <Expense key={expense.id} expense={expense} />
            ))}
        </div>
    );
}
