import ConfirmButton from "@/components/button/ConfirmButton";
import NagativeButton from "@/components/button/NagativeButton";
import useDeleteModal from "./ExpenseDeleteModal.hook";
import ModalDescription from "@/components/Modal/ModalDescription";
import ModalName from "@/components/Modal/ModalName";

export default function ExpenseDeleteModal() {
    const { handleCloseModal, handleDelete } = useDeleteModal();

    return (
        <div className="flex flex-col gap-2">
            <ModalName text="지출 삭제" />

            <ModalDescription text="지출을 삭제하시겠습니까?" />

            <form onSubmit={handleDelete} className="flex gap-2 mt-4">
                <ConfirmButton type="submit" text="삭제" bg="bg-red-600" />
                <NagativeButton
                    type="button"
                    text="취소"
                    onClick={handleCloseModal}
                />
            </form>
        </div>
    );
}
