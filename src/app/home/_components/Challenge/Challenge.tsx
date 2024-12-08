import { ChallengeProps } from "./Challenge.type";
import challengeSvg from "@/images/svg/challenge.svg";
import ImageWrapper from "@/components/ImageWrapper";
import useChallenge from "./Challenge.hook";
import Link from "next/link";
import ChallengePhase from "../ChallengePhase/ChallengePhase";

export default function Challenge({ challenge }: ChallengeProps) {
    const { progressDays, totalDays } = useChallenge({ challenge });

    return (
        <Link
            data-id={challenge.id}
            key={challenge.id}
            href={`/home/challenge/${challenge.id}`}
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
                    <div className="text-sm font-medium max-w-36 overflow-hidden text-ellipsis whitespace-nowrap">
                        {challenge.name}
                    </div>
                    <div className="text-xs text-gray-500 max-w-36 overflow-hidden text-ellipsis whitespace-nowrap">
                        {challenge.resolution}
                    </div>
                </div>
            </div>
            <div>
                <ChallengePhase
                    progressDays={progressDays}
                    totalDays={totalDays}
                    isEnded={challenge.is_ended}
                />
            </div>
        </Link>
    );
}
