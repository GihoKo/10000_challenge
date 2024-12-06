import NoExpenseCategory from "./NoExpenseCategory";
import ExpenseCategory from "./ExpenseCategory";
import { ExpenseCategoryContainerProps } from "./ExpenseCategoryContainer.type";

export default function ExpenseCategoryContainer({
    expenseCategories,
    expenseCategoriesDispatch,
}: ExpenseCategoryContainerProps) {
    return (
        <ul className="flex flex-col gap-2">
            {expenseCategories.length !== 0 ? (
                expenseCategories.map((category) => {
                    return (
                        <ExpenseCategory
                            key={category.id}
                            category={category}
                            expenseCategoriesDispatch={
                                expenseCategoriesDispatch
                            }
                        />
                    );
                })
            ) : (
                <NoExpenseCategory />
            )}
        </ul>
    );
}
