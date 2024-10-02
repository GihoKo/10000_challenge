import { ChallengeProgressBarProps } from "./ChallengeProgressBar.type";

export default function ChallengeProgressBar({
    progressBarWidth,
}: ChallengeProgressBarProps) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <span className="text-sm font-medium">진행도</span>
                <span className="text-sm font-medium">{progressBarWidth}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-300">
                <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${progressBarWidth}%` }}
                ></div>
            </div>
        </div>
    );
}
