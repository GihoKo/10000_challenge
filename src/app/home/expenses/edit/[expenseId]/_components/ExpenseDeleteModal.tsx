import ConfirmButton from "@/components/button/ConfirmButton";
import NagativeButton from "@/components/button/NagativeButton";
import useDeleteModal from "./ExpenseDeleteModal.hook";

export default function ExpenseDeleteModal() {
    const { handleCloseModal, handleDelete } = useDeleteModal();

    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-lg">지출 삭제</h3>

            <span className="text-sm text-gray-500">
                정말 삭제하시겠습니까?
            </span>

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
