import ConfirmButton from "@/components/button/ConfirmButton";
import NagativeButton from "@/components/button/NagativeButton";
import ModalDescription from "@/components/Modal/ModalDescription";
import ModalForm from "@/components/Modal/ModalForm";
import ModalName from "@/components/Modal/ModalName";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import { AddExpenseCategoryModalProps } from "./AddExpenseCategoryModal.type";
import useAddExpenseCategoryModal from "./AddExpenseCategoryModal.hook";

export default function AddExpenseCategoryModal({
    newExpenseCategoryInputRef,
    expenseCategoriesDispatch,
}: AddExpenseCategoryModalProps) {
    const { handleModalCloseButtonClick, handleAddButtonClick } =
        useAddExpenseCategoryModal({
            newExpenseCategoryInputRef,
            expenseCategoriesDispatch,
        });

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
