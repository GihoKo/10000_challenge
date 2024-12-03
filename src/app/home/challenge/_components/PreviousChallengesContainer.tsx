"use client";

import Challenge from "@/app/home/_components/Challenge/Challenge";
import usePreviousChallengesContainer from "./PreviousChallengesContainer.hook";

export default function PreviousChallengesContainer() {
    const { challenges } = usePreviousChallengesContainer();

    if (challenges.length === 0) {
        return (
            <div className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg text-sm">
                지난 챌린지가 없네요.
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-2">
            {challenges.map((challenge) => (
                <Challenge key={challenge.id} challenge={challenge} />
            ))}
        </div>
    );
}
