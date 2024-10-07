import { ChallengeResponse } from "@/types/challenge";

export interface ChallengeProps {
    challenge: ChallengeResponse;
    onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export interface UseChallengeProps {
    challenge: ChallengeResponse;
}
