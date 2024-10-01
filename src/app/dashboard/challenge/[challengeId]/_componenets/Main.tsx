"use client";
import supabaseClient from "@/supabase/supabaseClient";
import { ChallengeResponse } from "@/types/challenge";
import { ExpenseData } from "@/types/expense";
import { cacultateDaysOfChallenge } from "@/utils/calculateDaysOfChallenge";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Main() {
    const { challengeId } = useParams();

    // 챌린지
    const [challenge, setChallenge] = useState<ChallengeResponse>();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // 지출
    const [expenses, setExpenses] = useState<ExpenseData[]>([]);
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

    const getChallengeById = useCallback(async () => {
        const { data, error } = await supabaseClient
            .from("challenge")
            .select()
            .eq("id", challengeId);

        if (error) {
            throw error;
        }

        return data[0];
    }, [challengeId]);

    // challenge의 시작, 끝 날짜 사이의 expense 가져오기
    const getExpensesByChallengeDuration = useCallback(async () => {
        const { data, error } = await supabaseClient
            .from("expense")
            .select()
            .eq("user_id", process.env.NEXT_PUBLIC_USER_ID)
            .eq("date", challenge?.start_date)
            .lte("date", challenge?.goal_date);

        if (error) {
            throw error;
        }

        return data;
    }, [challenge?.start_date, challenge?.goal_date]);

    // 데이터 가져오기
    useEffect(() => {
        setIsLoading(true);

        getChallengeById()
            .then((challenge) => {
                setChallenge(challenge);
            })
            .then(() => {
                getExpensesByChallengeDuration().then((expenses) => {
                    console.log(expenses);
                    setExpenses(expenses);
                });
            })
            .catch((error) => {
                setIsError(true);
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [challengeId, getChallengeById, getExpensesByChallengeDuration]);

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

    if (isLoading) {
        return <div>데이터를 불러오는 중 입니다...</div>;
    }

    if (isError) {
        return <div>데이터 가져오기를 실패했습니다. 재시도해주세요.</div>;
    }

    return (
        <main className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">{challenge?.name}</h3>

            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">진행도</span>
                    <span className="text-sm font-medium">
                        {progressBarWidth}%
                    </span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-300">
                    <div
                        className="h-full rounded-full bg-black"
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
                    <span className="text-2xl font-bold text-blue-500">
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

            <h3 className="text-xl font-bold mt-4">차트</h3>
        </main>
    );
}
