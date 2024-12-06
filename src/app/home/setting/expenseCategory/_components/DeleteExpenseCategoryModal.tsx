import DangerousButton from "@/components/button/DangerousButton";
import NagativeButton from "@/components/button/NagativeButton";
import ModalDescription from "@/components/Modal/ModalDescription";
import ModalForm from "@/components/Modal/ModalForm";
import ModalName from "@/components/Modal/ModalName";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import useModalStore from "@/stores/modalStore";
import { ExpenseCategoryAction } from "../page";
import { deleteExpenseCategory } from "@/apis/services/expenseCategory";

interface DeleteExpenseCategoryModalProps {
    currentExpenseCategoryId: number;
    expenseCategoriesDispatch: React.Dispatch<ExpenseCategoryAction>;
}

export default function DeleteExpenseCategoryModal({
    currentExpenseCategoryId,
    expenseCategoriesDispatch,
}: DeleteExpenseCategoryModalProps) {
    const { closeModal } = useModalStore();

    const handleModalCloseButtonClick = () => {
        closeModal();
    };

    const handleDeleteButtonClick = () => {
        // 낙관적 업데이트
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

    return (
        <ModalWrapper>
            <ModalName text="소비 카테고리 삭제" />

            <ModalDescription text="소비 카테고리를 삭제하시겠습니까?" />

            <ModalForm onSubmit={() => {}}>
                <DangerousButton
                    text="삭제"
                    onClick={handleDeleteButtonClick}
                />
                <NagativeButton
                    text="닫기"
                    onClick={handleModalCloseButtonClick}
                />
            </ModalForm>
        </ModalWrapper>
    );
}
