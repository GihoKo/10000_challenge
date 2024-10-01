"use client";

import Challenge from "./Challenge";
import { ChallengeResponse } from "@/types/challenge";
import { useEffect, useState } from "react";
import supabaseClient from "@/supabase/supabaseClient";
import { useRouter } from "next/navigation";

export default function ChallengeContainer() {
    const [challenges, setChallenges] = useState<ChallengeResponse[]>([]);
    const router = useRouter();

    const getChallenges = async () => {
        const { data, error } = await supabaseClient.from("challenge").select();

        if (error) {
            throw error;
        }

        return data;
    };

    const handleChallengeClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const currentChallengeId = e.currentTarget.dataset.id;

        router.push(`/dashboard/challenge/detail/${currentChallengeId}`);
    };

    useEffect(() => {
        getChallenges()
            .then((challenges) => {
                setChallenges(challenges);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="flex flex-col gap-2">
            {challenges.map((challenge) => (
                <Challenge
                    key={challenge.id}
                    challenge={challenge}
                    onClick={handleChallengeClick}
                />
            ))}
        </div>
    );
}
