import { cacultateDaysOfChallenge } from "@/utils/calculateDaysOfChallenge";
import { useCallback, useEffect, useState } from "react";
import { UseChallengeInfoProps } from "./ChallengeInfo.type";
import { getExpenseCategoryByChallengeId } from "@/apis/services/expenseCategory";
import { ExpenseCategory } from "@/app/home/setting/expenseCategory/_components/Main/Main.type";
import { useParams } from "next/navigation";

export default function useChallengeInfo({
    challenge,
    expenses,
}: UseChallengeInfoProps) {
    const { challengeId } = useParams() as { challengeId: string };
    const [expenseCategoriesOfChallenge, setExpenseCategoriesOfChallenge] =
        useState<ExpenseCategory[]>([]);
    const [remainingSaving, setRemainingSaving] = useState(0);
    const [remainingDays, setRemainingDays] = useState(0);
    const [progressBarWidth, setProgressBarWidth] = useState(0);

    const { progressDays, totalDays } = cacultateDaysOfChallenge(challenge);

    const calculateRemainingSaving = useCallback(() => {
        if (!challenge) return 0;

        const totalSaving = Number(challenge.daily_saving) * progressDays;
        const totalExpense = expenses.reduce((acc, cur) => {
            return acc + cur.amount;
        }, 0);

        const remainingSaving = Number(totalSaving - totalExpense);

        return remainingSaving;
    }, [challenge, progressDays, expenses]);

    const calculateRemainingDays = useCallback(() => {
        const remainingDays = Number(totalDays - progressDays);

        return remainingDays;
    }, [progressDays, totalDays]);

    const calculateProgressBarWidth = useCallback(() => {
        const progressBarWidth = Math.floor((progressDays / totalDays) * 100);

        return progressBarWidth;
    }, [progressDays, totalDays]);

    useEffect(() => {
        setRemainingSaving(calculateRemainingSaving());
        setRemainingDays(calculateRemainingDays());
        setProgressBarWidth(calculateProgressBarWidth());
    }, [
        challenge,
        calculateRemainingSaving,
        calculateRemainingDays,
        calculateProgressBarWidth,
    ]);

    useEffect(() => {
        getExpenseCategoryByChallengeId({ challengeId }).then((response) => {
            setExpenseCategoriesOfChallenge(response);
        });
    }, [challengeId]);

    return {
        remainingSaving,
        remainingDays,
        progressBarWidth,
        expenseCategoriesOfChallenge,
    };
}
