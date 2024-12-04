import NagativeButton from "@/components/button/NagativeButton";
import ModalName from "@/components/Modal/ModalName";
import ModalDescription from "@/components/Modal/ModalDescription";
import ConfirmButton from "@/components/button/ConfirmButton";
import useDeleteChallengeModal from "./DeleteChallengeModal.hook";
import ModalForm from "@/components/Modal/ModalForm";

export default function DeleteChallengeModal() {
    const { handleDelete, handleCloseModal } = useDeleteChallengeModal();

    return (
        <div>
            <ModalName text="챌린지 삭제" />

            <ModalDescription text="챌린지를 삭제하시겠습니까?" />

            <ModalForm onSubmit={handleDelete}>
                <ConfirmButton type="submit" text="삭제" bg="bg-red-600" />
                <NagativeButton
                    type="button"
                    text="취소"
                    onClick={handleCloseModal}
                />
            </ModalForm>
        </div>
    );
}
