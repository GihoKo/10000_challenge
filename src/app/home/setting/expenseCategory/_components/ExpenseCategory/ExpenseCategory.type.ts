import { ExpenseCategory as ExpenseCategoryInterface } from "../Main/Main.type";
import { ExpenseCategoryAction } from "@/reducers/expenseCategoryReducer";

export interface ExpenseCategoryProps {
    category: ExpenseCategoryInterface;
    expenseCategoriesDispatch?: React.Dispatch<ExpenseCategoryAction>;
}
