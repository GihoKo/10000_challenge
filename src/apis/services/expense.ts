import { Values } from "@/app/expenses/add/_components/Main.type";
import supabaseClient from "@/supabase/client";
import { ChallengeResponse } from "@/types/challenge";
import formatDate from "@/utils/formatDate";

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

// 지출 생성
interface CreateExpenseParams {
    values: Values;
}

export const createExpense = async ({ values }: CreateExpenseParams) => {
    const expense = {
        category: values.category,
        description: values.description,
        amount: values.amount,
        user_id: process.env.NEXT_PUBLIC_USER_ID,
        date: formatDate(values.date),
    };

    const { data, error } = await supabaseClient
        .from("expense")
        .insert(expense);

    if (error) {
        throw new Error(error.message);
    }

    return data;
};
