import { deleteExpense } from "@/apis/services/expense";
import useModalStore from "@/stores/modalStore";
import { useParams, useRouter } from "next/navigation";
import ExpenseDeleteModal from "./ExpenseDeleteModal";

export default function useHeader() {
    const { expenseId } = useParams();
    const router = useRouter();
    const { setIsModalOpen } = useModalStore();

    const handleDelete = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();

        setIsModalOpen(<ExpenseDeleteModal />);
        // deleteExpense(expenseId as string).then(() => {
        //     router.push("/home/expenses");
        // });
    };

    return { handleDelete };
}
