import { ExpenseData } from "@/types/expense";

export interface ExpenseProps {
    expense: ExpenseData;
    onClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}
