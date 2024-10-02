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
        <main className="flex flex-col gap-2">
            <ChallengeInfo
                challenge={challenge}
                handleDeleteModalOpen={handleDeleteModalOpen}
            />

            <h3 className="text-xl font-bold mt-4">매일 지출</h3>
            <DailyExpenseBarChart challenge={challenge} expenses={expenses} />

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
