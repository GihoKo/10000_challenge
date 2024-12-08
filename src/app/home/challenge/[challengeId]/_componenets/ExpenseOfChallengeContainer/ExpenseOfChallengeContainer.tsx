import Expense from "@/app/home/expenses/_components/Expense/Expense";
import { ExpenseOfChallengeContainerProps } from "./ExpenseOfChallengeContainer.type";
import useRerenderCountStore from "@/stores/rerenderCountStore";

export default function ExpenseOfChallengeContainer({
    expenses,
}: ExpenseOfChallengeContainerProps) {
    const { incrementRerenderCount } = useRerenderCountStore.getState();
    incrementRerenderCount();

    return (
        <ul className="flex flex-col gap-2">
            {expenses.map((expense) => (
                <Expense key={expense.id} expense={expense} />
            ))}
        </ul>
    );
}
