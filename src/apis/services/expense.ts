import { Values } from "@/app/expenses/add/_components/Main.type";
import { useDateStore } from "@/stores/dateStore";
import supabaseClient from "@/supabase/client";
import { ChallengeResponse } from "@/types/challenge";
import { ExpenseData } from "@/types/expense";
import formatDate from "@/utils/formatDate";

// 해당 날짜에 해당하는 expense 가져오기
export const getExpensesByDate = async () => {
    const { date } = useDateStore.getState();

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

export interface UpdatedExpense {
    description: string;
    category: string;
    amount: number;
}

// expense 수정
export const updateExpense = async (
    expenseId: string | null,
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
