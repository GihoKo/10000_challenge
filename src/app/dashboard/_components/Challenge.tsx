import { ChallengeProps } from "./Challenge.type";
import { cacultateDaysOfChallenge } from "@/utils/calculateDaysOfChallenge";
import { calculateRemainingSaving } from "@/utils/calculateRemainingSaving";

export default function Challenge({ challenge }: ChallengeProps) {
    const { progressDays, totalDays } = cacultateDaysOfChallenge(challenge);

    return (
        <li
            key={challenge.id}
            className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg"
        >
            <div>
                <div className="text-sm font-medium">{challenge.name}</div>
            </div>
            <div>
                <span>
                    {progressDays} / {totalDays}
                </span>
            </div>
        </li>
    );
}
