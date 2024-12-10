import { getAllChallengesByUserId } from "@/apis/services/challenge";
import Challenge from "@/app/home/_components/Challenge/Challenge";
import { createClient } from "@/supabase/server";

export default async function ChallengesContainer() {
    const supabase = createClient();

    const user = await supabase.auth.getUser();

    try {
        const challenges = await getAllChallengesByUserId({
            userId: user.data.user?.id,
        });

        if (challenges.length === 0) {
            return (
                <div className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg text-sm">
                    생성했던 챌린지가 없네요.
                </div>
            );
        }

        return (
            <div className="flex flex-col gap-2">
                {challenges.map((challenge) => (
                    <Challenge key={challenge.id} challenge={challenge} />
                ))}
            </div>
        );
    } catch (error) {
        console.error(error);
    }
}
