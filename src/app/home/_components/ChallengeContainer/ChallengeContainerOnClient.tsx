"use client";

import { useEffect, useState } from "react";

import { ChallengeResponse } from "@/types/challenge";
import { getAllChallengesByUserId } from "@/apis/services/challenge";
import { useUser } from "@/contexts/UserContext";
import Challenge from "../Challenge/Challenge";

export default function ChallengeContainerOnClient() {
    const [challenges, setChallenges] = useState<ChallengeResponse[]>([]);
    const { user } = useUser();

    useEffect(() => {
        getAllChallengesByUserId({ userId: user?.id })
            .then((response) => {
                setChallenges(response);
            })
            .then(() => {
                console.log(challenges);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [user]);

    return (
        <div className="flex flex-col gap-2">
            {challenges.map((challenge: ChallengeResponse) => (
                <Challenge key={challenge.id} challenge={challenge} />
            ))}
        </div>
    );
}
