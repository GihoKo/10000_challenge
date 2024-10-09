import { ExpenseData } from "@/types/expense";

export interface ExpenseProps {
    expense: ExpenseData;
    onClick?: (expenseId: string) => void;
}
