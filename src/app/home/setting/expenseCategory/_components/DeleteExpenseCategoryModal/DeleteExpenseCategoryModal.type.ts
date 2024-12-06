import { ExpenseCategoryAction } from "@/reducers/expenseCategoryReducer";

export interface DeleteExpenseCategoryModalProps {
    currentExpenseCategoryId: number;
    expenseCategoriesDispatch: React.Dispatch<ExpenseCategoryAction>;
}

export interface UseDeleteExpenseCategoryModalProps {
    currentExpenseCategoryId: number;
    expenseCategoriesDispatch: React.Dispatch<ExpenseCategoryAction>;
}
