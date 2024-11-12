"use client";

import Challenge from "@/app/home/_components/Challenge/Challenge";
import usePreviousChallengesContainer from "./PreviousChallengesContainer.hook";

export default function PreviousChallengesContainer() {
    const { challenges } = usePreviousChallengesContainer();

    return (
        <div className="flex flex-col gap-2">
            {challenges.map((challenge) => (
                <Challenge key={challenge.id} challenge={challenge} />
            ))}
        </div>
    );
}
