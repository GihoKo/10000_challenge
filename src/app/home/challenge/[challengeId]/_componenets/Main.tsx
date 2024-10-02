"use client";

import supabaseClient from "@/supabase/supabaseClient";
import { ChallengeResponse } from "@/types/challenge";
import { ExpenseData } from "@/types/expense";
import { cacultateDaysOfChallenge } from "@/utils/calculateDaysOfChallenge";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import DeleteChallengeModal from "./DeleteChallengeModal";
import ExpenseOfChallengeContainer from "./ExpenseOfChallengeContainer";
import { DailyExpense, ExpensesByCategory } from "@/types/chart";
import CategoryPieChart from "./CategoryPieChart";
import DailyExpenseBarChart from "./DailyExpenseBarChart";
import ChallengeInfo from "./ChallengeInfo";

export default function Main() {
    const { challengeId } = useParams();
    const router = useRouter();

    // 챌린지
    const [challenge, setChallenge] = useState<ChallengeResponse>();
    const [isLoadingChallenge, setIsLoadingChallenge] = useState(true);
    const [isErrorChallenge, setIsErrorChallenge] = useState(false);

    // 지출
    const [expenses, setExpenses] = useState<ExpenseData[]>([]);
    const [remainingSaving, setRemainingSaving] = useState(0);
    const [remainingDays, setRemainingDays] = useState(0);
    const [progressBarWidth, setProgressBarWidth] = useState(0);

    // 차트 데이터
    const [dailyExpenses, setDailyExpenses] = useState<DailyExpense[]>([]);

    // 삭제 모달
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleDeleteModalClose = () => {
        setIsDeleteModalOpen(false);
    };

    const handleDeleteModalOpen = () => {
        setIsDeleteModalOpen(true);
    };

    const handleDeleteChallenge = () => {
        deleteChallenge(challenge?.id)
            .then(() => {
                router.push("/home");
            })
            .catch((error) => {
                console.error(error);
            });
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

        console.log(progressBarWidth);

        return progressBarWidth;
    }, [challenge]);

    const groupExpensesByDate = useCallback(() => {
        if (!expenses) return [];

        const groupedExpenses: DailyExpense[] = [];

        expenses.forEach((expense) => {
            const date = expense.date;
            const amount = expense.amount;

            // 만약 groupedExpenses에 date가 존재하면 해당 객체에 amount를 더하기
            if (groupedExpenses.some((item) => item.date === date)) {
                const index = groupedExpenses.findIndex(
                    (item) => item.date === date
                );
                groupedExpenses[index].amount += amount;
            } else {
                // 만약 groupedExpenses에 date가 없다면 해당 객체를 추가하기
                groupedExpenses.push({ date, amount });
            }
        });

        return groupedExpenses;
    }, [expenses]);

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
            .gte("date", challenge?.start_date)
            .lte("date", challenge?.goal_date)
            .order("date", { ascending: false });

        if (error) {
            throw error;
        }

        return data;
    }, [challenge?.start_date, challenge?.goal_date]);

    const deleteChallenge = async (challengeId: string | undefined) => {
        const { error } = await supabaseClient
            .from("challenge")
            .delete()
            .eq("id", challengeId)
            .select();

        if (error) {
            throw error;
        }

        return null;
    };

    // 데이터 가져오기
    useEffect(() => {
        setIsLoadingChallenge(true);

        getChallengeById()
            .then((challenge) => {
                setChallenge(challenge);
            })
            .then(() => {
                getExpensesByChallengeDuration()
                    .then((expenses) => {
                        setExpenses(expenses);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((error) => {
                setIsErrorChallenge(true);
                console.error(error);
            })
            .finally(() => {
                setIsLoadingChallenge(false);
            });
    }, [challengeId, getChallengeById, getExpensesByChallengeDuration]);

    useEffect(() => {
        setRemainingSaving(calculateRemainingSaving());
        setRemainingDays(calculateRemainingDays());
        setProgressBarWidth(calculateProgressBarWidth());
        setDailyExpenses(groupExpensesByDate());
    }, [
        challenge,
        expenses,
        calculateRemainingSaving,
        calculateRemainingDays,
        calculateProgressBarWidth,
        groupExpensesByDate,
    ]);

    if (isLoadingChallenge) {
        return <div>챌린지 데이터를 불러오는 중 입니다...</div>;
    }

    if (isErrorChallenge) {
        return (
            <div>챌린지 데이터 가져오기를 실패했습니다. 재시도해주세요.</div>
        );
    }

    return (
        <main className="flex flex-col gap-2">
            <ChallengeInfo
                challenge={challenge}
                handleDeleteModalOpen={handleDeleteModalOpen}
                progressBarWidth={progressBarWidth}
                remainingSaving={remainingSaving}
                remainingDays={remainingDays}
            />

            <h3 className="text-xl font-bold mt-4">매일 지출</h3>
            <DailyExpenseBarChart
                dailyExpenses={dailyExpenses}
                challenge={challenge}
            />

            <h3 className="text-xl font-bold mt-4">카테고리 파이</h3>
            <CategoryPieChart expenses={expenses} />

            <h3 className="text-xl font-bold mt-4">최근 지출 목록</h3>
            {expenses && <ExpenseOfChallengeContainer expenses={expenses} />}

            {isDeleteModalOpen && (
                <DeleteChallengeModal
                    onClose={handleDeleteModalClose}
                    handleDeleteChallenge={handleDeleteChallenge}
                />
            )}
        </main>
    );
}
