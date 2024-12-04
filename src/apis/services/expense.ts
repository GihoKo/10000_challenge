import { Values } from "@/app/home/expenses/add/_components/Main.type";
import supabaseClient from "@/supabase/client";
import { ChallengeResponse } from "@/types/challenge";
import formatDate from "@/utils/formatDate";

interface GetExpensesByDateProps {
    date: string;
}

// 해당 날짜에 해당하는 expense 가져오기
export const getExpensesByDate = async ({ date }: GetExpensesByDateProps) => {
    const { data: expenses, error } = await supabaseClient
        .from("expense")
        .select("*")
        .eq("user_id", process.env.NEXT_PUBLIC_USER_ID)
        .eq("date", date);

    if (error) {
        throw new Error(error.message);
    }

    return expenses;
};

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
    data: {
        category: string;
        description: string;
        amount: number;
        date: string;
    };
}

export const createExpense = async ({ data }: CreateExpenseParams) => {
    const newExpense = {
        category: data.category,
        description: data.description,
        amount: data.amount,
        user_id: process.env.NEXT_PUBLIC_USER_ID,
        date: formatDate(data.date),
    };

    const { error } = await supabaseClient.from("expense").insert(newExpense);

    if (error) {
        throw new Error(error.message);
    }

    return true;
};

export interface UpdatedExpense {
    description: string;
    category: string;
    amount: number;
}

// expense 수정
export const updateExpense = async (
    expenseId: string,
    updatedExpense: UpdatedExpense
) => {
    const { data, error } = await supabaseClient
        .from("expense")
        .update(updatedExpense)
        .eq("id", expenseId)
        .select();

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

// expense 삭제
export const deleteExpense = async (expenseId: string | null) => {
    const { error } = await supabaseClient
        .from("expense")
        .delete()
        .eq("id", expenseId);

    if (error) {
        throw new Error(error.message);
    }
};
