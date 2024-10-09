import { getIncompleteChallenges } from "@/apis/services/challenge";
import { ChallengeResponse } from "@/types/challenge";
import { useEffect, useState } from "react";

export default function useChallengeContainer() {
    const [challenges, setChallenges] = useState<ChallengeResponse[]>([]);

    useEffect(() => {
        getIncompleteChallenges()
            .then((response) => {
                setChallenges(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return {
        challenges,
    };
}
