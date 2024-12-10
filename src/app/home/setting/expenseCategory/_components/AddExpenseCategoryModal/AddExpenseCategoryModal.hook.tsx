import { addExpenseCategory } from "@/apis/services/expenseCategory";
import useModalStore from "@/stores/modalStore";
import { UseAddExpenseCategoryModalProps } from "./AddExpenseCategoryModal.type";
import { useUser } from "@/contexts/UserContext";

export default function useAddExpenseCategoryModal({
    newExpenseCategoryInputRef,
    expenseCategoriesDispatch,
}: UseAddExpenseCategoryModalProps) {
    const { closeModal } = useModalStore();

    const { user } = useUser();

    const handleModalCloseButtonClick = () => {
        closeModal();
    };

    const clearInput = () => {
        if (!newExpenseCategoryInputRef.current) return;

        newExpenseCategoryInputRef.current.value = "";
    };

    const handleAddButtonClick = () => {
        // 낙관적 업데이트
        if (!newExpenseCategoryInputRef.current) return;

        const newExpenseCategoryName = newExpenseCategoryInputRef.current.value;

        const tempExpenseCategory = {
            id: Date.now(),
            name: newExpenseCategoryName,
            user_id: user?.id,
            created_at: new Date().toISOString(),
        };

        expenseCategoriesDispatch({
            type: "ADD",
            payload: tempExpenseCategory,
        });

        // 서버에 카테고리 추가
        addExpenseCategory({
            name: newExpenseCategoryName,
            userId: user?.id,
        }).catch((error) => {
            console.error(error);
        });

        closeModal();
        clearInput();
    };

    return {
        handleModalCloseButtonClick,
        handleAddButtonClick,
    };
}
