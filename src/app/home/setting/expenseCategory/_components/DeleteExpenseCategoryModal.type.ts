import { ExpenseCategoryAction } from "../page";

export interface DeleteExpenseCategoryModalProps {
    currentExpenseCategoryId: number;
    expenseCategoriesDispatch: React.Dispatch<ExpenseCategoryAction>;
}

export interface UseDeleteExpenseCategoryModalProps {
    currentExpenseCategoryId: number;
    expenseCategoriesDispatch: React.Dispatch<ExpenseCategoryAction>;
}
