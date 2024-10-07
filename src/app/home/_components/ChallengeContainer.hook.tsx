import { getIncompleteChallenges } from "@/apis/services/challenge";
import { ChallengeResponse } from "@/types/challenge";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useChallengeContainer() {
    const [challenges, setChallenges] = useState<ChallengeResponse[]>([]);
    const router = useRouter();

    const handleChallengeClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const currentChallengeId = e.currentTarget.dataset.id;

        router.push(`/home/challenge/${currentChallengeId}`);
    };

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
        handleChallengeClick,
    };
}
