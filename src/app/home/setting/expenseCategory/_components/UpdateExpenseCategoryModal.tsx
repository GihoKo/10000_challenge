import ConfirmButton from "@/components/button/ConfirmButton";
import NagativeButton from "@/components/button/NagativeButton";
import ModalForm from "@/components/Modal/ModalForm";
import ModalName from "@/components/Modal/ModalName";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import useModalStore from "@/stores/modalStore";
import { useEffect, useRef } from "react";
import { ExpenseCategoryAction } from "../page";
import { updateExpenseCategory } from "@/apis/services/expenseCategory";

interface UpdateExpenseCategoryModalProps {
    currentExpenseCategory: {
        id: number;
        name: string;
    };
    expenseCategoriesDispatch: React.Dispatch<ExpenseCategoryAction>;
}

export default function UpdateExpenseCategoryModal({
    currentExpenseCategory,
    expenseCategoriesDispatch,
}: UpdateExpenseCategoryModalProps) {
    const { closeModal } = useModalStore();

    const inputRef = useRef<HTMLInputElement>(null);

    const handleUpdateButtonClick = () => {
        // 낙관적 업데이트
        if (!inputRef.current) return;

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

    return (
        <ModalWrapper>
            <ModalName text="소비 카테고리 수정" />

            <input
                ref={inputRef}
                value={inputRef.current?.value}
                onChange={handleInputChange}
                type="text"
                className="border border-gray-300 rounded-lg p-2"
            />

            <ModalForm onSubmit={() => {}}>
                <ConfirmButton text="수정" onClick={handleUpdateButtonClick} />
                <NagativeButton
                    text="닫기"
                    onClick={handleModalCloseButtonClick}
                />
            </ModalForm>
        </ModalWrapper>
    );
}
