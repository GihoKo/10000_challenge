import { ExpenseCategory } from "@/app/home/setting/expenseCategory/_components/Main/Main.type";

export interface ExpenseCategoriesOfChallengeTagContainerProps {
    handleExpenseCategoryTagClick?: (
        e: React.MouseEvent<HTMLUListElement, MouseEvent>
    ) => void;
    expenseCategoriesOfChallenge: ExpenseCategory[];
}
