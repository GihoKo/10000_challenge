import ConfirmButton from "@/components/button/ConfirmButton";
import useChallengeStateNotice from "./ChallengeStateNotice.hook";
import { ChallengeStateNoticeProps } from "./ChallengeStateNotice.type";
import useRerenderCountStore from "@/stores/rerenderCountStore";

export default function ChallengeStateNotice({
    remainingDays,
    isEnded,
}: ChallengeStateNoticeProps) {
    const { handleEndChallengeModalOpen } = useChallengeStateNotice();

    const { incrementRerenderCount } = useRerenderCountStore.getState();
    incrementRerenderCount();

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
                    onClick={handleEndChallengeModalOpen}
                />
            </div>
        );
    }
}
