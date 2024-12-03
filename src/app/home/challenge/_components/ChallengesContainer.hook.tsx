import { getAllChallenges } from "@/apis/services/challenge";
import { ChallengeResponse } from "@/types/challenge";
import { useEffect, useState } from "react";

export default function useChallengesContainer() {
    const [challenges, setChallenges] = useState<ChallengeResponse[]>([]);

    useEffect(() => {
        getAllChallenges()
            .then((response) => {
                setChallenges(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return { challenges };
}
