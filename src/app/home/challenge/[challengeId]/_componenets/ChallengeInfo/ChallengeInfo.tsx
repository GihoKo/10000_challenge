import { ChallengeInfoProps } from "./ChallengeInfo.type";
import DangerousButton from "@/components/button/DangerousButton";
import ChallengeStateNotice from "../ChallengeStateNotice/ChallengeStateNotice";
import useChallengeInfo from "./ChallengeInfo.hook";

export default function ChallengeInfo({ challenge }: ChallengeInfoProps) {
    const {
        remainingSaving,
        remainingDays,
        progressBarWidth,
        handleDeleteChallengeModalOpen,
    } = useChallengeInfo({ challenge });

    return (
        <section className="flex flex-col gap-4">
            <ChallengeStateNotice
                challengeId={challenge?.id}
                remainingDays={remainingDays}
                isEnded={challenge?.is_ended}
            />

            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{challenge?.name}</h3>

                <DangerousButton
                    type="button"
                    text="삭제"
                    rounded="rounded-md"
                    px="px-2"
                    py="py-1"
                    width="w-auto"
                    onClick={handleDeleteChallengeModalOpen}
                />
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">진행도</span>
                    <span className="text-sm font-medium">
                        {progressBarWidth}%
                    </span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-300">
                    <div
                        className="h-full rounded-full bg-blue-500"
                        style={{ width: `${progressBarWidth}%` }}
                    ></div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">현재 남은 돈</span>
                    <span
                        className={`text-2xl font-bold ${
                            remainingSaving >= 0
                                ? "text-blue-500"
                                : "text-red-500"
                        }`}
                    >
                        {remainingSaving}
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">일일 목표 금액</span>
                    <span className="text-2xl font-bold">
                        {challenge?.daily_saving}
                    </span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">남은 일수</span>
                    <span className="text-2xl font-bold">{remainingDays}</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">마감일</span>
                    <span className="text-2xl font-bold">
                        {challenge?.goal_date}
                    </span>
                </div>
            </div>
        </section>
    );
}
