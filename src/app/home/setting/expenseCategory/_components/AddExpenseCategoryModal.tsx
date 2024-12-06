import { addExpenseCategory } from "@/apis/services/expenseCategory";
import ConfirmButton from "@/components/button/ConfirmButton";
import NagativeButton from "@/components/button/NagativeButton";
import ModalDescription from "@/components/Modal/ModalDescription";
import ModalForm from "@/components/Modal/ModalForm";
import ModalName from "@/components/Modal/ModalName";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import useModalStore from "@/stores/modalStore";
import { ExpenseCategoryAction } from "../page";

interface AddExpenseCategoryModalProps {
    newExpenseCategoryInputRef: React.RefObject<HTMLInputElement>;
    ExpenseCategoriesDispatch: React.Dispatch<ExpenseCategoryAction>;
}

export default function AddExpenseCategoryModal({
    newExpenseCategoryInputRef,
    ExpenseCategoriesDispatch,
}: AddExpenseCategoryModalProps) {
    const { closeModal } = useModalStore();

    const handleModalCloseButtonClick = () => {
        closeModal();
    };

    const handleAddButtonClick = () => {
        // 낙관적인 업데이트
        if (!newExpenseCategoryInputRef.current) return;

        const newExpenseCategoryName = newExpenseCategoryInputRef.current.value;

        const tempExpenseCategory = {
            id: Date.now(),
            name: newExpenseCategoryName,
            user_id: process.env.NEXT_PUBLIC_USER_ID as string,
            created_at: new Date().toISOString(),
        };

        ExpenseCategoriesDispatch({
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

    return (
        <ModalWrapper>
            <ModalName text="소비 카테고리 추가" />

            <ModalDescription text="소비 카테고리를 추가하시겠습니까?" />

            <ModalForm onSubmit={() => {}}>
                <ConfirmButton text="추가" onClick={handleAddButtonClick} />
                <NagativeButton
                    text="닫기"
                    onClick={handleModalCloseButtonClick}
                />
            </ModalForm>
        </ModalWrapper>
    );
}
