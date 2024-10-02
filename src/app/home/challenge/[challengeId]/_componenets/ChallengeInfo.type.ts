import { ChallengeResponse } from "@/types/challenge";

export interface ChallengeInfoProps {
    challenge: ChallengeResponse | undefined;
    handleDeleteModalOpen: () => void;
}
