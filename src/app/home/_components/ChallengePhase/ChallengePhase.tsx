import { ChallengePhaseProps } from "./ChallengePhase.type";

export default function ChallengePhase({
    progressDays,
    totalDays,
    isEnded,
}: ChallengePhaseProps) {
    if (progressDays < totalDays) {
        return (
            <span className="text-sm text-blue-500">
                {`진행 (  ${progressDays} / ${totalDays} )`}
            </span>
        );
    }

    if (!isEnded && progressDays >= totalDays) {
        return (
            <span className="text-sm text-green-500">챌린지가 끝났습니다!</span>
        );
    }

    if (isEnded) {
        return <span className="text-sm text-gray-500">종료된 챌린지</span>;
    }
}
