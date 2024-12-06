import { ExpenseCategory as ExpenseCategoryInterface } from "./Main.type";
import { ExpenseCategoryAction } from "@/reducers/expenseCategoryReducer";

export interface ExpenseCategoryContainerProps {
    expenseCategories: ExpenseCategoryInterface[];
    expenseCategoriesDispatch: React.Dispatch<ExpenseCategoryAction>;
}

export interface UseExpenseCategoryContainerProps {
    expenseCategoriesDispatch: React.Dispatch<ExpenseCategoryAction>;
}
