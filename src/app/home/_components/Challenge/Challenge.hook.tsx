import { cacultateDaysOfChallenge } from "@/utils/calculateDaysOfChallenge";
import { UseChallengeProps } from "./Challenge.type";

export default function useChallenge({ challenge }: UseChallengeProps) {
    const { progressDays, totalDays } = cacultateDaysOfChallenge(challenge);

    return {
        progressDays,
        totalDays,
    };
}
