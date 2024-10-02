import { ChallengeProps } from "./Challenge.type";
import { cacultateDaysOfChallenge } from "@/utils/calculateDaysOfChallenge";

export default function Challenge({ challenge, onClick }: ChallengeProps) {
    const { progressDays, totalDays } = cacultateDaysOfChallenge(challenge);

    return (
        <li
            data-id={challenge.id}
            key={challenge.id}
            onClick={onClick}
            className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg"
        >
            <div>
                <div className="text-sm font-medium">{challenge.name}</div>
                <div className={`text-xs text-gray-500`}>
                    {challenge.resolution}
                </div>
            </div>
            <div>
                <span>
                    {progressDays} / {totalDays}
                </span>
            </div>
        </li>
    );
}
