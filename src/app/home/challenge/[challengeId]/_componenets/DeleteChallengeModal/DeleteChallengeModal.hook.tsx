import { deleteChallenge } from "@/apis/services/challenge";
import useModalStore from "@/stores/modalStore";
import { useParams, useRouter } from "next/navigation";

export default function useDeleteChallengeModal() {
    const { challengeId } = useParams();
    const { closeModal } = useModalStore();
    const router = useRouter();

    const handleCloseModal = () => {
        closeModal();
    };

    const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        deleteChallenge({ challengeId })
            .then(() => {
                closeModal();
                router.push("/home/challenge");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return { handleDelete, handleCloseModal };
}
