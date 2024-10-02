import { useRouter } from "next/navigation";

export default function useNavigateToExpensePageButton() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/expenses");
    };

    return { handleClick };
}
