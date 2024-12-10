import { getIncompleteChallenges } from "@/apis/services/challenge";
import { ChallengeResponse } from "@/types/challenge";
import Challenge from "../Challenge/Challenge";
import { createClient } from "@/supabase/server";

export async function ChallengeContainerOnServer() {
    const supabase = createClient();

    const { data } = await supabase.auth.getUser();

    try {
        const challenges = await getIncompleteChallenges({
            userId: data.user?.id,
        });

        if (challenges.length === 0) {
            return (
                <div className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg text-sm">
                    진행 중인 챌린지가 없네요.
                </div>
            );
        }

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
