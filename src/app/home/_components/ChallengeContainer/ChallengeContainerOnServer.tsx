import { getIncompleteChallenges } from "@/apis/services/challenge";
import { ChallengeResponse } from "@/types/challenge";
import Challenge from "../Challenge/Challenge";

export async function ChallengeContainerOnServer() {
    try {
        const challenges = await getIncompleteChallenges();

        return (
            <div className="flex flex-col gap-2">
                {challenges.map((challenge: ChallengeResponse) => (
                    <Challenge key={challenge.id} challenge={challenge} />
                ))}
            </div>
        );
    } catch (error) {
        return <div>데이터를 가져오지 못했습니다.</div>;
    }
}
