import { addExpenseCategory } from "@/apis/services/expenseCategory";
import ConfirmButton from "@/components/button/ConfirmButton";
import NagativeButton from "@/components/button/NagativeButton";
import ModalDescription from "@/components/Modal/ModalDescription";
import ModalForm from "@/components/Modal/ModalForm";
import ModalName from "@/components/Modal/ModalName";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import useModalStore from "@/stores/modalStore";

interface AddExpenseCategoryModalProps {
    newExpenseCategory: string;
}

export default function AddExpenseCategoryModal({
    newExpenseCategory,
}: AddExpenseCategoryModalProps) {
    const { closeModal } = useModalStore();

    const handleModalCloseButtonClick = () => {
        closeModal();
        sessionStorage.removeItem("newExpenseCategory");
    };

    const handleAddButtonClick = () => {
        const userId = process.env.NEXT_PUBLIC_USER_ID as string;

        if (!newExpenseCategory || !userId) return;

        const formValues = {
            name: newExpenseCategory,
            user_id: userId,
        };

        addExpenseCategory({ formValues: formValues })
            .then(() => {
                closeModal();
            })
            .catch((error) => {
                console.error(error);
            });
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
