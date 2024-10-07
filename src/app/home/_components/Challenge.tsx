import { ChallengeProps } from "./Challenge.type";
import { cacultateDaysOfChallenge } from "@/utils/calculateDaysOfChallenge";
import challengeSvg from "@/images/svg/challenge.svg";
import ImageWrapper from "@/components/ImageWrapper";

export default function Challenge({ challenge, onClick }: ChallengeProps) {
    const { progressDays, totalDays } = cacultateDaysOfChallenge(challenge);

    return (
        <li
            data-id={challenge.id}
            key={challenge.id}
            onClick={onClick}
            className="flex justify-between items-center py-2 px-4 bg-blue-50 rounded-lg"
        >
            <div className="flex gap-2">
                <ImageWrapper
                    src={challengeSvg}
                    alt="챌린지 이미지"
                    width={24}
                    height={24}
                />
                <div>
                    <div className="text-sm font-medium">{challenge.name}</div>
                    <div className={`text-xs text-gray-500`}>
                        {challenge.resolution}
                    </div>
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
