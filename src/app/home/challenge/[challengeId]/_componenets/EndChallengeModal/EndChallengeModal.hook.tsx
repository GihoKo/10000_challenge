import { endChallenge } from "@/apis/services/challenge";
import useModalStore from "@/stores/modalStore";
import { useParams } from "next/navigation";

export default function useEndChallengeModal() {
    const { closeModal } = useModalStore();
    const { challengeId } = useParams();

    const handleClose = () => {
        closeModal();
    };

    const handleSubmit = () => {
        alert("챌린지 종료 버튼 클릭");
    };

    const handleEndChallengeButtonClick = () => {
        endChallenge({
            challengeId,
        })
            .then(() => {
                closeModal();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return {
        handleClose,
        handleSubmit,
        handleEndChallengeButtonClick,
    };
}
