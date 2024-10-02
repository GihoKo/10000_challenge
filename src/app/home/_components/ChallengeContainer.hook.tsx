import supabaseClient from "@/supabase/supabaseClient";
import { ChallengeResponse } from "@/types/challenge";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useChallengeContainer() {
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

        router.push(`/home/challenge/${currentChallengeId}`);
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

    return {
        challenges,
        handleChallengeClick,
    };
}
