import { ChallengeResponse } from "@/types/challenge";

export interface MainHeaderProps {
    challenge: ChallengeResponse | undefined;
    handleDeleteModalOpen: () => void;
}
