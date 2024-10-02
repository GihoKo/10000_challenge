"use client";

import DeleteChallengeModal from "./DeleteChallengeModal";
import ExpenseOfChallengeContainer from "./ExpenseOfChallengeContainer";
import CategoryPieChart from "./CategoryPieChart";
import DailyExpenseBarChart from "./DailyExpenseBarChart";
import ChallengeInfo from "./ChallengeInfo";
import useMain from "./Main.hook";

export default function Main() {
    const {
        challenge,
        expenses,
        isDeleteModalOpen,
        handleDeleteModalClose,
        handleDeleteModalOpen,
        handleDeleteChallenge,
    } = useMain();

    return (
        <main className="flex flex-col gap-8">
            <ChallengeInfo
                challenge={challenge}
                handleDeleteModalOpen={handleDeleteModalOpen}
            />

            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">매일 지출</h3>
                <DailyExpenseBarChart
                    challenge={challenge}
                    expenses={expenses}
                />
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">카테고리 파이</h3>
                <CategoryPieChart expenses={expenses} />
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">최근 지출 목록</h3>
                {expenses && (
                    <ExpenseOfChallengeContainer expenses={expenses} />
                )}
            </div>

            {isDeleteModalOpen && (
                <DeleteChallengeModal
                    onClose={handleDeleteModalClose}
                    handleDeleteChallenge={handleDeleteChallenge}
                />
            )}
        </main>
    );
}
