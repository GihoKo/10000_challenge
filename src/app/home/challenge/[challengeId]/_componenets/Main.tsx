"use client";

import Expense from "@/app/expenses/_components/Main/Expense";
import NagativeButton from "@/components/button/NagativeButton";
import supabaseClient from "@/supabase/supabaseClient";
import { ChallengeResponse } from "@/types/challenge";
import { ExpenseData } from "@/types/expense";
import { cacultateDaysOfChallenge } from "@/utils/calculateDaysOfChallenge";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Pie,
    PieChart,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import DeleteChallengeModal from "./DeleteChallengeModal";
import ExpenseOfChallengeContainer from "./ExpenseOfChallengeContainer";

interface DailyExpense {
    date: string;
    amount: number;
}

interface ExpensesByCategory {
    name: "식비" | "교통비" | "문화생활" | "기타";
    amount: number;
    fill: "#3B82F6" | "#F59E0B" | "#10B981" | "#EF4444";
}

export default function Main() {
    const { challengeId } = useParams();
    const router = useRouter();

    // 챌린지
    const [challenge, setChallenge] = useState<ChallengeResponse>();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // 지출
    const [expenses, setExpenses] = useState<ExpenseData[]>([]);
    const [remainingSaving, setRemainingSaving] = useState(0);
    const [remainingDays, setRemainingDays] = useState(0);
    const [progressBarWidth, setProgressBarWidth] = useState(0);

    // 차트 데이터
    const [dailyExpenses, setDailyExpenses] = useState<DailyExpense[]>([]);
    const [expensesByCategory, setExpensesByCategory] = useState<
        ExpensesByCategory[]
    >([
        { name: "식비", amount: 0, fill: "#3B82F6" },
        { name: "교통비", amount: 0, fill: "#F59E0B" },
        { name: "문화생활", amount: 0, fill: "#10B981" },
        { name: "기타", amount: 0, fill: "#EF4444" },
    ]);

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

    const groupExpensesByCategory = useCallback(() => {
        if (!expenses) return [];

        const groupedExpenses: ExpensesByCategory[] = [...expensesByCategory];

        expenses.forEach((expense) => {
            const category = expense.category;
            const amount = expense.amount;

            // 해당 카테고리에 amount를 더하기
            const index = groupedExpenses.findIndex(
                (expense) => expense.name === category
            );
            groupedExpenses[index].amount += amount;
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
        setIsLoading(true);

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
        setDailyExpenses(groupExpensesByDate());
        setExpensesByCategory(groupExpensesByCategory());
    }, [
        challenge,
        expenses,
        calculateRemainingSaving,
        calculateRemainingDays,
        calculateProgressBarWidth,
        groupExpensesByDate,
        groupExpensesByCategory,
    ]);

    if (isLoading) {
        return <div>데이터를 불러오는 중 입니다...</div>;
    }

    if (isError) {
        return <div>데이터 가져오기를 실패했습니다. 재시도해주세요.</div>;
    }

    return (
        <main className="flex flex-col gap-2">
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

            <h3 className="text-xl font-bold mt-4">매일 지출</h3>

            {dailyExpenses ? (
                <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={dailyExpenses}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend
                            payload={[
                                {
                                    value: "지출",
                                    type: "rect",
                                    color: "#3B82F6",
                                },
                                {
                                    value: "목표 지출",
                                    type: "line",
                                    color: "red",
                                },
                            ]}
                        />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Bar
                            dataKey="amount"
                            name="지출"
                            barSize={20}
                            fill="#3B82F6"
                        />
                        <ReferenceLine
                            y={challenge?.daily_saving}
                            name="목표 지출"
                            stroke="red"
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            ) : null}

            <h3 className="text-xl font-bold mt-4">카테고리 파이</h3>

            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Legend />
                    <Tooltip />
                    <Pie
                        data={expensesByCategory}
                        dataKey="amount"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#3B82F6"
                        label
                    />
                </PieChart>
            </ResponsiveContainer>

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
