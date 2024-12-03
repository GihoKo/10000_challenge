import { deleteExpense } from "@/apis/services/expense";
import { useParams, useRouter } from "next/navigation";

export default function useHeader() {
    const { expenseId } = useParams();
    const router = useRouter();

    const handleDelete = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        deleteExpense(expenseId as string).then(() => {
            router.push("/home/expenses");
        });
    };

    return { handleDelete };
}
