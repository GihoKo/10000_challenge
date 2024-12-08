import useModalStore from "@/stores/modalStore";
import { deleteExpenseCategory } from "@/apis/services/expenseCategory";
import { UseDeleteExpenseCategoryModalProps } from "./DeleteExpenseCategoryModal.type";

export default function useDeleteExpenseCategoryModal({
    currentExpenseCategoryId,
    expenseCategoriesDispatch,
}: UseDeleteExpenseCategoryModalProps) {
    const { closeModal } = useModalStore();

    const handleModalCloseButtonClick = () => {
        closeModal();
    };

    const handleDeleteButtonClick = () => {
        // 낙관적 업데이트
        if (!expenseCategoriesDispatch) return;

        expenseCategoriesDispatch({
            type: "DELETE",
            payload: {
                id: currentExpenseCategoryId,
            },
        });

        // api 요청
        const formValues = {
            id: currentExpenseCategoryId,
        };

        deleteExpenseCategory({ formValues: formValues }).catch((error) => {
            console.error(error);
        });

        closeModal();
    };

    return { handleModalCloseButtonClick, handleDeleteButtonClick };
}
