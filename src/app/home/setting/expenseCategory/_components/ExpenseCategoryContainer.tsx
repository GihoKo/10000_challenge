import NoExpenseCategory from "./NoExpenseCategory";
import ExpenseCategory from "./ExpenseCategory";
import { ExpenseCategoryContainerProps } from "./ExpenseCategoryContainer.type";
import useExpenseCategoryContainer from "./ExpenseCategoryContainer.hook";

export default function ExpenseCategoryContainer({
    expenseCategories,
    expenseCategoriesDispatch,
}: ExpenseCategoryContainerProps) {
    const { handleUpdateOrDeleteCategoryButtonClick } =
        useExpenseCategoryContainer({ expenseCategoriesDispatch });

    return (
        <ul
            className="flex flex-col gap-2"
            onClick={handleUpdateOrDeleteCategoryButtonClick}
        >
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
