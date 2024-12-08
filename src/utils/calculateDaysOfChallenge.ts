import { ChallengeResponse } from "@/types/challenge";

export const cacultateDaysOfChallenge = (
    challenge: ChallengeResponse | undefined
) => {
    if (!challenge) return { progressDays: 0, totalDays: 0 };

    const nowDayMilliseconds = Number(new Date().getTime());
    const startDayMilliseconds = Number(
        new Date(challenge.start_date).getTime()
    );
    const goalDayMilliseconds = Number(new Date(challenge.goal_date).getTime());

    let progressDayMilliseconds = 0;
    let totalDayMilliseconds = 0;

    if (nowDayMilliseconds >= goalDayMilliseconds) {
        progressDayMilliseconds = Number(
            goalDayMilliseconds - startDayMilliseconds
        );
        totalDayMilliseconds = Number(
            goalDayMilliseconds - startDayMilliseconds
        );
    } else {
        progressDayMilliseconds = Number(
            nowDayMilliseconds - startDayMilliseconds
        );

        totalDayMilliseconds = Number(
            goalDayMilliseconds - startDayMilliseconds
        );
    }

    const progressDays = Math.floor(progressDayMilliseconds / 86400000) + 1;
    const totalDays = Math.floor(totalDayMilliseconds / 86400000) + 1;

    return {
        progressDays,
        totalDays,
    };
};
