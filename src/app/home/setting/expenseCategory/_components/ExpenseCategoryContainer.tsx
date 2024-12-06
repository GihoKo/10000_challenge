import NoExpenseCategory from "./NoExpenseCategory";
import ExpenseCategory from "./ExpenseCategory";
import { ExpenseCategoryContainerProps } from "./ExpenseCategoryContainer.type";
import useModalStore from "@/stores/modalStore";
import UpdateExpenseCategoryModal from "./UpdateExpenseCategoryModal";
import DeleteExpenseCategoryModal from "./DeleteExpenseCategoryModal";

export default function ExpenseCategoryContainer({
    expenseCategories,
    expenseCategoriesDispatch,
}: ExpenseCategoryContainerProps) {
    const { setIsModalOpen } = useModalStore();

    const handleUpdateCategoryModalOpenButtonClick = (e: React.MouseEvent) => {
        const currentExpenseCategoryName = (
            e.target as HTMLElement
        ).closest<HTMLButtonElement>("button")?.dataset.name;

        const currentExpenseCategoryId = Number(
            (e.target as HTMLElement).closest<HTMLButtonElement>("button")
                ?.dataset.id
        );

        if (!currentExpenseCategoryName || !currentExpenseCategoryId) return;

        const currentExpenseCategory = {
            id: currentExpenseCategoryId,
            name: currentExpenseCategoryName,
        };

        setIsModalOpen(
            <UpdateExpenseCategoryModal
                currentExpenseCategory={currentExpenseCategory}
                expenseCategoriesDispatch={expenseCategoriesDispatch}
            />
        );
    };

    const handleDeleteCategoryModalOpenButtonClick = (e: React.MouseEvent) => {
        const currentExpenseCategoryId = Number(
            (e.target as HTMLElement).closest<HTMLButtonElement>("button")
                ?.dataset.id
        );

        if (!currentExpenseCategoryId) return;

        setIsModalOpen(
            <DeleteExpenseCategoryModal
                currentExpenseCategoryId={currentExpenseCategoryId}
                expenseCategoriesDispatch={expenseCategoriesDispatch}
            />
        );
    };

    const handleUpdateOrDeleteCategoryButtonClick = (e: React.MouseEvent) => {
        const buttonType = (e.target as HTMLElement).closest<HTMLButtonElement>(
            "button"
        )?.dataset.type;

        if (!buttonType) return;

        if (buttonType === "update") {
            handleUpdateCategoryModalOpenButtonClick(e);
        } else if (buttonType === "delete") {
            handleDeleteCategoryModalOpenButtonClick(e);
        }
    };

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
