import { addExpenseCategory } from "@/apis/services/expenseCategory";
import useModalStore from "@/stores/modalStore";
import { UseAddExpenseCategoryModalProps } from "./AddExpenseCategoryModal.type";

export default function useAddExpenseCategoryModal({
    newExpenseCategoryInputRef,
    expenseCategoriesDispatch,
}: UseAddExpenseCategoryModalProps) {
    const { closeModal } = useModalStore();

    const handleModalCloseButtonClick = () => {
        closeModal();
    };

    const handleAddButtonClick = () => {
        // 낙관적 업데이트
        if (!newExpenseCategoryInputRef.current) return;

        const newExpenseCategoryName = newExpenseCategoryInputRef.current.value;

        const tempExpenseCategory = {
            id: Date.now(),
            name: newExpenseCategoryName,
            user_id: process.env.NEXT_PUBLIC_USER_ID as string,
            created_at: new Date().toISOString(),
        };

        expenseCategoriesDispatch({
            type: "ADD",
            payload: tempExpenseCategory,
        });

        // api 요청
        const userId = process.env.NEXT_PUBLIC_USER_ID;

        if (!userId) return;

        const formValues = {
            name: newExpenseCategoryName,
            user_id: userId,
        };

        addExpenseCategory({ formValues: formValues }).catch((error) => {
            console.error(error);
        });

        closeModal();

        if (!newExpenseCategoryInputRef.current) return;
        newExpenseCategoryInputRef.current.value = "";
    };

    return {
        handleModalCloseButtonClick,
        handleAddButtonClick,
    };
}
