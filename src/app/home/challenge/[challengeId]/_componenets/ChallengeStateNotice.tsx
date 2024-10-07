import { endChallenge } from "@/apis/services/challenge";
import ConfirmButton from "@/components/button/ConfirmButton";
import { useRouter } from "next/navigation";

interface ChallengeStateNoticeProps {
    challengeId: string | undefined;
    remainingDays: number;
    isEnded: boolean | undefined;
}

export default function ChallengeStateNotice({
    challengeId,
    remainingDays,
    isEnded,
}: ChallengeStateNoticeProps) {
    const router = useRouter();

    const handleEndChallengeButtonClick = () => {
        endChallenge({
            challengeId,
        }).then((response) => {
            if (response.status === 204) {
                console.log("챌린지가 종료되었습니다.");
                router.push("/home");
            }
        });
    };

    if (isEnded) {
        return (
            <div className="flex flex-col gap-2">
                <span className="text-xl font-medium text-blue-500">
                    종료된 챌린지입니다.
                </span>
            </div>
        );
    }

    if (remainingDays <= 0) {
        return (
            <div className="flex flex-col gap-2">
                <span className="text-xl font-medium text-blue-500">
                    챌린지가 끝났어요!
                </span>
                <ConfirmButton
                    type="button"
                    text="챌린지 종료하기"
                    onClick={handleEndChallengeButtonClick}
                />
            </div>
        );
    }
}
