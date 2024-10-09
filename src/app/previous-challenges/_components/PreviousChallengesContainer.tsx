"use client";

import Challenge from "@/app/home/_components/Challenge";
import usePreviousChallengesContainer from "./PreviousChallengesContainer.hook";

export default function PreviousChallengesContainer() {
    const { challenges } = usePreviousChallengesContainer();

    return (
        <div>
            {challenges.map((challenge) => (
                <Challenge key={challenge.id} challenge={challenge} />
            ))}
        </div>
    );
}
