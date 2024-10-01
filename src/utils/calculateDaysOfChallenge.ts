import { ChallengeResponse } from "@/types/challenge";

export const cacultateDaysOfChallenge = (challenge: ChallengeResponse) => {
    const nowDayMilliseconds = Number(new Date().getTime());
    const startDayMilliseconds = Number(
        new Date(challenge.start_date).getTime()
    );
    const goalDayMilliseconds = Number(new Date(challenge.goal_date).getTime());

    const progressDayMilliseconds = Number(
        nowDayMilliseconds - startDayMilliseconds
    );
    const totalDayMilliseconds = Number(
        goalDayMilliseconds - startDayMilliseconds
    );

    const progressDays = Math.floor(progressDayMilliseconds / 86400000) + 1;
    const totalDays = Math.floor(totalDayMilliseconds / 86400000) + 1;

    return {
        progressDays,
        totalDays,
    };
};
