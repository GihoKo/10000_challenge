"use client";

import ExpenseOfChallengeContainer from "../ExpenseOfChallengeContainer/ExpenseOfChallengeContainer";
import DailyExpenseBarChart from "../DailyExpenseBarChart/DailyExpenseBarChart";
import ChallengeInfo from "../ChallengeInfo/ChallengeInfo";
import useMain from "./Main.hook";
import LinkToEditPage from "../LinkToEditPage/LinkToEditPage";
import DangerousButton from "@/components/button/DangerousButton";

export default function Main() {
    const { challenge, expenses, handleDeleteChallengeModalOpen } = useMain();

    return (
        <main className="flex flex-col gap-8">
            <ChallengeInfo challenge={challenge} expenses={expenses} />

            <section className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">매일 지출</h3>
                <DailyExpenseBarChart
                    challenge={challenge}
                    expenses={expenses}
                />
            </section>

            {/* <section className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">카테고리 파이</h3>
                <CategoryPieChart expenses={expenses} />
            </section> */}

            <section className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">최근 지출 목록</h3>
                {expenses && (
                    <ExpenseOfChallengeContainer expenses={expenses} />
                )}
            </section>

            <section className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">챌린지 관리</h3>
                <div className="flex flex-col gap-2">
                    <LinkToEditPage challengeId={challenge?.id} />

                    <DangerousButton
                        type="button"
                        text="삭제"
                        rounded="rounded-md"
                        px="px-2"
                        py="py-1"
                        width="w-auto"
                        onClick={handleDeleteChallengeModalOpen}
                    />
                </div>
            </section>
        </main>
    );
}
