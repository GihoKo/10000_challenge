import NagativeButton from "@/components/button/NagativeButton";
import ModalName from "@/components/Modal/ModalName";
import ModalDescription from "@/components/Modal/ModalDescription";
import { deleteChallenge } from "@/apis/services/challenge";
import { useParams, useRouter } from "next/navigation";
import useModalStore from "@/stores/modalStore";
import ConfirmButton from "@/components/button/ConfirmButton";

export default function DeleteChallengeModal() {
    const { closeModal } = useModalStore();
    const { challengeId } = useParams();
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

    return (
        <div>
            <ModalName text="챌린지 삭제" />

            <ModalDescription text="챌린지를 삭제하시겠습니까?" />

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
