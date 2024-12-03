import { getCompletedChallenges } from "@/apis/services/challenge";
import { ChallengeResponse } from "@/types/challenge";
import { useEffect, useState } from "react";

export default function useChallengesContainer() {
    const [challenges, setChallenges] = useState<ChallengeResponse[]>([]);

    useEffect(() => {
        getCompletedChallenges()
            .then((response) => {
                setChallenges(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return { challenges };
}
