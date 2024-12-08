import Link from "next/link";
import useRerenderCountStore from "@/stores/rerenderCountStore";
import { useParams } from "next/navigation";

export default function LinkToEditPage() {
    const { challengeId } = useParams();

    const { incrementRerenderCount } = useRerenderCountStore.getState();
    incrementRerenderCount();

    return (
        <Link
            href={`/home/challenge/${challengeId}/edit`}
            className="flex justify-center items-center gap-2 bg-blue-600 px-2 py-1 rounded-lg text-gray-100 hover:bg-blue-800 transition-colors duration-300"
        >
            수정 페이지 이동
        </Link>
    );
}
