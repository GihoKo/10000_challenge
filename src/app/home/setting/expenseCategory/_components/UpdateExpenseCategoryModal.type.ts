import { ExpenseCategoryAction } from "../page";

export interface UpdateExpenseCategoryModalProps {
    currentExpenseCategory: {
        id: number;
        name: string;
    };
    expenseCategoriesDispatch: React.Dispatch<ExpenseCategoryAction>;
}

export interface UseUpdateExpenseCategoryModalProps {
    currentExpenseCategory: {
        id: number;
        name: string;
    };
    expenseCategoriesDispatch: React.Dispatch<ExpenseCategoryAction>;
}
