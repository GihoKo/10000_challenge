import { ChallengeProps } from "./Challenge.type";
import { cacultateDaysOfChallenge } from "@/utils/calculateDaysOfChallenge";
import { calculateRemainingSaving } from "@/utils/calculateRemainingSaving";

export default function Challenge({ challenge }: ChallengeProps) {
    const remainingSaving = calculateRemainingSaving(challenge);
    const { progressDays, totalDays } = cacultateDaysOfChallenge(challenge);

    return (
        <li
            key={challenge.id}
            className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg"
        >
            <div>
                <div className="text-sm font-medium">{challenge.name}</div>
                <div
                    className={`text-xs ${
                        remainingSaving >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                >
                    {remainingSaving >= 0
                        ? `+${remainingSaving}`
                        : remainingSaving}
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
