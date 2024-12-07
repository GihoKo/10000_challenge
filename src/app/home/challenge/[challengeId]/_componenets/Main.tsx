"use client";

import ExpenseOfChallengeContainer from "./ExpenseOfChallengeContainer";
import DailyExpenseBarChart from "./DailyExpenseBarChart";
import ChallengeInfo from "./ChallengeInfo";
import useMain from "./Main.hook";

export default function Main() {
    const { challenge, expenses } = useMain();

    return (
        <main className="flex flex-col gap-8">
            <ChallengeInfo challenge={challenge} />

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
        </main>
    );
}
