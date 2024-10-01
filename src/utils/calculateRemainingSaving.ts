import { ChallengeResponse } from "@/types/challenge";
import { cacultateDaysOfChallenge } from "./calculateDaysOfChallenge";
import { ExpenseData } from "@/types/expense";

export const calculateRemainingSaving = (
    challenge: ChallengeResponse | undefined
) => {
    const { progressDays } = cacultateDaysOfChallenge(challenge);

    // 남은 금액 계산
    const totalSaving = Number(challenge.daily_saving) * progressDays;
    const totalExpense = 10000;

    const remainingSaving = Number(totalSaving - totalExpense);

    return remainingSaving;
};
