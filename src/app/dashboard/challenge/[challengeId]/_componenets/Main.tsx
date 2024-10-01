"use client";
import supabaseClient from "@/supabase/supabaseClient";
import { ChallengeResponse } from "@/types/challenge";
import { ExpenseData } from "@/types/expense";
import { cacultateDaysOfChallenge } from "@/utils/calculateDaysOfChallenge";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Main() {
    const { challengeId } = useParams();

    const [challenge, setChallenge] = useState<ChallengeResponse>();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [expenses, setExpenses] = useState<ExpenseData[]>([]);
    const [remainingSaving, setRemainingSaving] = useState(0);

    const calculateRemainingSaving = useCallback(() => {
        if (!challenge) return 0;
        const { progressDays } = cacultateDaysOfChallenge(challenge);

        // 남은 금액 계산
        const totalSaving = Number(challenge.daily_saving) * progressDays;
        const totalExpense = 10000;

        const remainingSaving = Number(totalSaving - totalExpense);

        return remainingSaving;
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

    // 남은 금액 계산
    useEffect(() => {
        setRemainingSaving(calculateRemainingSaving());
    }, [challenge, calculateRemainingSaving]);

    if (isLoading) {
        return <div>데이터를 불러오는 중 입니다...</div>;
    }

    if (isError) {
        return <div>데이터 가져오기를 실패했습니다. 재시도해주세요.</div>;
    }

    return (
        <main className="flex flex-col gap-8">
            <div>
                <h4 className="text-lg">{challenge?.name}</h4>

                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">다짐</span>
                    <span className="text-base font-medium">
                        {challenge?.resolution}
                    </span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                        일일 목표 금액
                    </span>
                    <span className="text-base font-medium text-blue-500">
                        {challenge?.daily_saving}
                    </span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">기간</span>
                    <span className="text-base font-medium">
                        {challenge?.start_date} ~ {challenge?.goal_date}
                    </span>
                </div>
            </div>

            <div>
                <h4 className="text-lg">진행 상황</h4>

                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">남은 금액</span>
                    <span
                        className={`text-base font-medium ${
                            remainingSaving >= 0
                                ? "text-blue-500"
                                : "text-red-500"
                        }`}
                    >
                        {remainingSaving >= 0
                            ? `+${remainingSaving}`
                            : remainingSaving}
                    </span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">진행률</span>
                    <span className="text-base font-medium"></span>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                        일별 목표 차트
                    </span>
                    <span className="text-base font-medium"></span>
                </div>
            </div>
        </main>
    );
}
