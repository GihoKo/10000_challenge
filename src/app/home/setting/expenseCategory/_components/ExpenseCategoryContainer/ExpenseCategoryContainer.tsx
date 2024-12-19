import { ExpenseCategoryContainerProps } from "./ExpenseCategoryContainer.type";
import useExpenseCategoryContainer from "./ExpenseCategoryContainer.hook";
import ExpenseCategory from "../ExpenseCategory/ExpenseCategory";
import NoExpenseCategory from "../NoExpenseCategory/NoExpenseCategory";

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
                            key={category._id}
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
