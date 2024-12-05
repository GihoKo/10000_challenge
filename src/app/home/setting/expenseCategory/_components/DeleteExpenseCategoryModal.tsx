import DangerousButton from "@/components/button/DangerousButton";
import NagativeButton from "@/components/button/NagativeButton";
import ModalDescription from "@/components/Modal/ModalDescription";
import ModalForm from "@/components/Modal/ModalForm";
import ModalName from "@/components/Modal/ModalName";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import useModalStore from "@/stores/modalStore";

export default function DeleteExpenseCategoryModal() {
    const { closeModal } = useModalStore();

    const handleModalCloseButtonClick = () => {
        closeModal();
    };

    const handleDeleteButtonClick = () => {
        alert("삭제 버튼 클릭");
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
