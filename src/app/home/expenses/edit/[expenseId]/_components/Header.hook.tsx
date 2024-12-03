import { deleteExpense } from "@/apis/services/expense";
import useModalStore from "@/stores/modalStore";
import { useParams, useRouter } from "next/navigation";
import ExpenseDeleteModal from "./ExpenseDeleteModal";

export default function useHeader() {
    const { setIsModalOpen } = useModalStore();

    const handleDelete = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();

        setIsModalOpen(<ExpenseDeleteModal />);
    };

    return { handleDelete };
}
