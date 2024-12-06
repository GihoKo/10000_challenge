import { ExpenseCategoryAction } from "@/reducers/expenseCategoryReducer";

export interface AddExpenseCategoryModalProps {
    newExpenseCategoryInputRef: React.RefObject<HTMLInputElement>;
    expenseCategoriesDispatch: React.Dispatch<ExpenseCategoryAction>;
}

export interface UseAddExpenseCategoryModalProps {
    newExpenseCategoryInputRef: React.RefObject<HTMLInputElement>;
    expenseCategoriesDispatch: React.Dispatch<ExpenseCategoryAction>;
}
