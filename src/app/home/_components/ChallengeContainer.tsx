"use client";

import Challenge from "./Challenge";
import useChallengeContainer from "./ChallengeContainer.hook";

export default function ChallengeContainer() {
    const { challenges } = useChallengeContainer();

    return (
        <div className="flex flex-col gap-2">
            {challenges.map((challenge) => (
                <Challenge key={challenge.id} challenge={challenge} />
            ))}
        </div>
    );
}
