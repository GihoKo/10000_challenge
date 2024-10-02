import supabaseClient from "@/supabase/supabaseClient";
import { ChallengeResponse } from "@/types/challenge";

// challenge의 시작, 끝 날짜 사이의 expense 가져오기
interface GetExpensesByChallengeDurationParams {
    challenge: ChallengeResponse | undefined;
}

export const getExpensesByChallengeDuration = async ({
    challenge,
}: GetExpensesByChallengeDurationParams) => {
    const { data, error } = await supabaseClient
        .from("expense")
        .select()
        .eq("user_id", process.env.NEXT_PUBLIC_USER_ID)
        .gte("date", challenge?.start_date)
        .lte("date", challenge?.goal_date)
        .order("date", { ascending: false });

    if (error) {
        throw error;
    }

    return data;
};
