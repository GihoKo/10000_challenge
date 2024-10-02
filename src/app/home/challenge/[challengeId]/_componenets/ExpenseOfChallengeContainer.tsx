import Expense from "@/app/expenses/_components/Main/Expense";
import { ExpenseOfChallengeContainerProps } from "./ExpenseOfChallengeContainer.type";

export default function ExpenseOfChallengeContainer({
    expenses,
}: ExpenseOfChallengeContainerProps) {
    return (
        <div>
            {expenses.map((expense) => (
                <Expense key={expense.id} expense={expense} />
            ))}
        </div>
    );
}
