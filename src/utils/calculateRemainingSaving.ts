import { ChallengeResponse } from "@/types/challenge";
import { cacultateDaysOfChallenge } from "./calculateDaysOfChallenge";

export const calculateRemainingSaving = (challenge: ChallengeResponse) => {
    const { progressDays, totalDays } = cacultateDaysOfChallenge(challenge);

    // 남은 금액 계산
    const totalSaving = Number(challenge.daily_saving) * progressDays;
    const totalExpense = 10000;

    const remainingSaving = Number(totalSaving - totalExpense);

    return remainingSaving;
};
