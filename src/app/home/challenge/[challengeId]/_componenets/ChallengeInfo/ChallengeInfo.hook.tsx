import { cacultateDaysOfChallenge } from "@/utils/calculateDaysOfChallenge";
import { useCallback, useEffect, useState } from "react";
import { UseChallengeInfoProps } from "./ChallengeInfo.type";
import useModalStore from "@/stores/modalStore";
import DeleteChallengeModal from "../DeleteChallengeModal/DeleteChallengeModal";
import { getExpenseCategoryByChallengeId } from "@/apis/services/expenseCategory";
import { useParams } from "next/navigation";
import { ExpenseCategory } from "@/app/home/setting/expenseCategory/_components/Main/Main.type";

export default function useChallengeInfo({ challenge }: UseChallengeInfoProps) {
    const { challengeId } = useParams() as { challengeId: string };
    const [expenseCategoriesOfChallenge, setExpenseCategoriesOfChallenge] =
        useState<ExpenseCategory[]>([]);
    const [remainingSaving, setRemainingSaving] = useState(0);
    const [remainingDays, setRemainingDays] = useState(0);
    const [progressBarWidth, setProgressBarWidth] = useState(0);
    const { setIsModalOpen } = useModalStore();

    const handleDeleteChallengeModalOpen = () => {
        setIsModalOpen(<DeleteChallengeModal />);
    };

    const calculateRemainingSaving = useCallback(() => {
        if (!challenge) return 0;
        const { progressDays } = cacultateDaysOfChallenge(challenge);

        const totalSaving = Number(challenge.daily_saving) * progressDays;
        const totalExpense = 10000;

        const remainingSaving = Number(totalSaving - totalExpense);

        return remainingSaving;
    }, [challenge]);

    const calculateRemainingDays = useCallback(() => {
        if (!challenge) return 0;
        const { progressDays, totalDays } = cacultateDaysOfChallenge(challenge);

        const remainingDays = Number(totalDays - progressDays);

        return remainingDays;
    }, [challenge]);

    const calculateProgressBarWidth = useCallback(() => {
        if (!challenge) return 0;
        const { progressDays, totalDays } = cacultateDaysOfChallenge(challenge);

        const progressBarWidth = Math.floor((progressDays / totalDays) * 100);

        return progressBarWidth;
    }, [challenge]);

    useEffect(() => {
        setRemainingSaving(calculateRemainingSaving());
        setRemainingDays(calculateRemainingDays());
        setProgressBarWidth(calculateProgressBarWidth());

        getExpenseCategoryByChallengeId({ challengeId }).then((response) => {
            setExpenseCategoriesOfChallenge(response);
        });
    }, [
        challenge,
        calculateRemainingSaving,
        calculateRemainingDays,
        calculateProgressBarWidth,
        challengeId,
    ]);

    return {
        remainingSaving,
        remainingDays,
        progressBarWidth,
        expenseCategoriesOfChallenge,
        handleDeleteChallengeModalOpen,
    };
}
