import useModalStore from "@/stores/modalStore";
import { UseUpdateExpenseCategoryModalProps } from "./UpdateExpenseCategoryModal.type";
import { useEffect, useRef } from "react";
import { updateExpenseCategory } from "@/apis/services/expenseCategory";

export default function useUpdateExpenseCategoryModal({
    currentExpenseCategory,
    expenseCategoriesDispatch,
}: UseUpdateExpenseCategoryModalProps) {
    const { closeModal } = useModalStore();

    const inputRef = useRef<HTMLInputElement>(null);

    const handleUpdateButtonClick = () => {
        // 낙관적 업데이트
        if (!inputRef.current || !expenseCategoriesDispatch) return;

        expenseCategoriesDispatch({
            type: "UPDATE",
            payload: {
                id: currentExpenseCategory.id,
                name: inputRef.current?.value,
            },
        });

        // api 요청
        const formValues = {
            id: currentExpenseCategory.id,
            name: inputRef.current.value,
        };

        updateExpenseCategory({ formValues: formValues }).catch((error) => {
            console.error(error);
        });

        closeModal();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!inputRef.current) return;
        inputRef.current.value = e.target.value;
    };

    const handleModalCloseButtonClick = () => {
        closeModal();
    };

    useEffect(() => {
        if (currentExpenseCategory && inputRef.current) {
            inputRef.current.value = currentExpenseCategory.name;
        }
    }, [currentExpenseCategory]);

    return {
        handleModalCloseButtonClick,
        handleInputChange,
        handleUpdateButtonClick,
        inputRef,
    };
}
