import useModalStore from "@/stores/modalStore";
import UpdateExpenseCategoryModal from "./UpdateExpenseCategoryModal";
import DeleteExpenseCategoryModal from "./DeleteExpenseCategoryModal";
import { UseExpenseCategoryContainerProps } from "./ExpenseCategoryContainer.type";

export default function useExpenseCategoryContainer({
    expenseCategoriesDispatch,
}: UseExpenseCategoryContainerProps) {
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

    return { handleUpdateOrDeleteCategoryButtonClick };
}
