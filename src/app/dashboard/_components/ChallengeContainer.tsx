"use client";

import Challenge from "./Challenge";
import { ChallengeResponse } from "@/types/challenge";
import { useEffect, useState } from "react";
import supabaseClient from "@/supabase/supabaseClient";

export default function ChallengeContainer() {
    const [challenges, setChallenges] = useState<ChallengeResponse[]>([]);

    const getChallenges = async () => {
        const { data, error } = await supabaseClient.from("challenge").select();

        if (error) {
            throw error;
        }

        return data;
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
                <Challenge key={challenge.id} challenge={challenge} />
            ))}
        </div>
    );
}
