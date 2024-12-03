import { deleteExpense } from "@/apis/services/expense";
import useModalStore from "@/stores/modalStore";
import { useParams, useRouter } from "next/navigation";

export default function useDeleteModal() {
    const { closeModal } = useModalStore();
    const { expenseId } = useParams();
    const router = useRouter();

    const handleCloseModal = () => {
        closeModal();
    };

    const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        deleteExpense(expenseId as string)
            .then(() => {
                closeModal();
                router.push("/home/expenses");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return { handleCloseModal, handleDelete };
}
