import NagativeButton from "@/components/button/NagativeButton";
import { ChallengeInfoProps } from "./ChallengeInfo.type";
import { useCallback, useEffect, useState } from "react";
import { cacultateDaysOfChallenge } from "@/utils/calculateDaysOfChallenge";

export default function ChallengeInfo({
    challenge,
    handleDeleteModalOpen,
}: ChallengeInfoProps) {
    const [remainingSaving, setRemainingSaving] = useState(0);
    const [remainingDays, setRemainingDays] = useState(0);
    const [progressBarWidth, setProgressBarWidth] = useState(0);

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

        console.log(progressBarWidth);

        return progressBarWidth;
    }, [challenge]);

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

    return (
        <div>
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{challenge?.name}</h3>

                <NagativeButton
                    type="button"
                    text="삭제"
                    rounded="rounded-md"
                    px="px-2"
                    py="py-1"
                    width="w-auto"
                    onClick={handleDeleteModalOpen}
                />
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">진행도</span>
                    <span className="text-sm font-medium">
                        {progressBarWidth}%
                    </span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-300">
                    <div
                        className="h-full rounded-full bg-blue-500"
                        style={{ width: `${progressBarWidth}%` }}
                    ></div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">현재 남은 돈</span>
                    <span
                        className={`text-2xl font-bold ${
                            remainingSaving >= 0
                                ? "text-blue-500"
                                : "text-red-500"
                        }`}
                    >
                        {remainingSaving}
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">일일 목표 금액</span>
                    <span className="text-2xl font-bold">
                        {challenge?.daily_saving}
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">남은 일수</span>
                    <span className="text-2xl font-bold">{remainingDays}</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">마감일</span>
                    <span className="text-2xl font-bold">
                        {challenge?.goal_date}
                    </span>
                </div>
            </div>
        </div>
    );
}
