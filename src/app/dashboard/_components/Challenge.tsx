import { ChallengeProps } from "./Challenge.type";

export default function Challenge({ challenge }: ChallengeProps) {
    return (
        <li
            key={challenge.id}
            className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg"
        >
            <div>
                <div className="text-sm font-medium">{challenge.name}</div>
                <div
                    className={`text-xs ${
                        challenge.totalRemainingMoney < 0
                            ? "text-red-500"
                            : "text-green-500"
                    }`}
                >
                    {challenge.totalRemainingMoney}
                </div>
            </div>
            <div>
                <span>
                    {challenge.progressDays} / {challenge.totalDays}
                </span>
            </div>
        </li>
    );
}
