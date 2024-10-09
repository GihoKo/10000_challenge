import { endChallenge } from "@/apis/services/challenge";
import { useRouter } from "next/navigation";
import { UseChallengeStateNoticeProps } from "./ChallengeStateNotice.type";

export default function useChallengeStateNotice({
    challengeId,
}: UseChallengeStateNoticeProps) {
    const router = useRouter();

    const handleEndChallengeButtonClick = () => {
        endChallenge({
            challengeId,
        })
            .then((response) => {
                if (response.status === 204) {
                    console.log("챌린지가 종료되었습니다.");
                    router.push("/home");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return { handleEndChallengeButtonClick };
}
