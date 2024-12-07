import useModalStore from "@/stores/modalStore";
import { EndChallengeModal } from "./EndChallengeModal/EndChallengeModal";

export default function useChallengeStateNotice() {
    const { setIsModalOpen } = useModalStore();

    const handleEndChallengeModalOpen = () => {
        setIsModalOpen(<EndChallengeModal />);
    };

    return { handleEndChallengeModalOpen };
}
