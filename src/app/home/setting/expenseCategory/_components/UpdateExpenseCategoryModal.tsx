import ConfirmButton from "@/components/button/ConfirmButton";
import NagativeButton from "@/components/button/NagativeButton";
import ModalForm from "@/components/Modal/ModalForm";
import ModalName from "@/components/Modal/ModalName";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import useUpdateExpenseCategoryModal from "./UpdateExpenseCategoryModal.hook";
import { UpdateExpenseCategoryModalProps } from "./UpdateExpenseCategoryModal.type";

export default function UpdateExpenseCategoryModal({
    currentExpenseCategory,
    expenseCategoriesDispatch,
}: UpdateExpenseCategoryModalProps) {
    const {
        handleModalCloseButtonClick,
        handleInputChange,
        handleUpdateButtonClick,
        inputRef,
    } = useUpdateExpenseCategoryModal({
        currentExpenseCategory,
        expenseCategoriesDispatch,
    });

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
