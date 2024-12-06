import supabaseClient from "@/supabase/client";
import { ChallengeResponse } from "@/types/challenge";
import { ExpenseData } from "@/types/expense";
import formatDate from "@/utils/formatDate";

interface GetExpenseProps {
    expenseId: string | string[];
}

// 해당 id의 expense 가져오기
export const getExpense = async ({ expenseId }: GetExpenseProps) => {
    const { data: expense, error } = await supabaseClient
        .from("expense")
        .select("*")
        .eq("id", expenseId);

    if (error) {
        throw new Error(error.message);
    }

    return expense[0];
};

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

interface Expense {
    id: string;
    date: string;
    description: string;
    amount: number;
    category_name: string;
    category_id: number;
    user_id: string;
}

interface ExpenseCategory {
    id: number;
    name: string;
    expenses: Expense[];
}

interface ChallengeExpenseCategory {
    expense_category: ExpenseCategory;
}

export const getExpensesByChallengeDuration = async ({
    challenge,
}: GetExpensesByChallengeDurationParams) => {
    if (!challenge) {
        return [];
    }

    const { data, error } = (await supabaseClient
        .from("challenge_expense_category")
        .select(
            `expense_category:expense_category_id (
                id,
                name,
                expenses:expense (
                    id,
                    date,
                    description,
                    amount,
                    category_name,
                    category_id,
                    user_id
                )
            )
            `
        )
        .eq("challenge_id", challenge.id)) as {
        data: ChallengeExpenseCategory[] | null;
        error: any;
    };

    if (error) {
        throw new Error(error.message);
    }

    // 지출 데이터 합치기
    const expensesByCategory: ExpenseData[] = [];

    if (!data) return expensesByCategory;

    data.forEach((category) => {
        category.expense_category.expenses.forEach((expense) => {
            expensesByCategory.push(expense);
        });
    });

    return expensesByCategory;
};

// 지출 생성
interface CreateExpenseParams {
    data: {
        category_name: string;
        category_id: number;
        description: string;
        amount: number;
        date: string;
    };
}

export const createExpense = async ({ data }: CreateExpenseParams) => {
    const newExpense = {
        category_name: data.category_name,
        category_id: data.category_id,
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
    category_name: string;
    category_id: number;
    description: string;
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
