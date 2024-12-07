import { ExpenseCategory } from "@/app/home/setting/expenseCategory/_components/Main/Main.type";
import supabaseClient from "@/supabase/client";

interface GetExpenseCategoryByUserIdParams {
    userId: string;
}

// 소비 카테고리 목록 조회
export const getExpenseCategoryByUserId = async ({
    userId,
}: GetExpenseCategoryByUserIdParams) => {
    const response = await supabaseClient
        .from("expense_category")
        .select()
        .eq("user_id", userId);

    if (response.error) {
        throw new Error(response.error.message);
    }

    return response.data;
};

interface GetExpenseCategoryByChallengeIdParams {
    challengeId: string;
}

interface GetExpenseCategoryByChallengeIdResponse {
    expense_category: {
        expense_category_id: number;
        name: string;
        user_id: string;
        created_at: string;
    };
}

// challenge의 카테고리 목록 조회
export const getExpenseCategoryByChallengeId = async ({
    challengeId,
}: GetExpenseCategoryByChallengeIdParams) => {
    const { data, error } = (await supabaseClient
        .from("challenge_expense_category")
        .select(
            `
                expense_category:expense_category_id (
                    id,
                    name,
                    user_id,
                    created_at
                )
            `
        )
        .eq("challenge_id", challengeId)) as {
        data: GetExpenseCategoryByChallengeIdResponse[] | null;
        error: any;
    };

    if (error) {
        throw new Error(error.message);
    }

    if (!data) return [];

    const formattedData = data.map((item) => {
        return {
            id: item.expense_category.expense_category_id,
            name: item.expense_category.name,
            user_id: item.expense_category.user_id,
            created_at: item.expense_category.created_at,
        };
    });

    return formattedData;
};

interface AddExpenseCategoryParams {
    formValues: {
        name: string;
        user_id: string;
    };
}

// 소비 카테고리 추가
export const addExpenseCategory = async ({
    formValues,
}: AddExpenseCategoryParams) => {
    const newExpenseCategory = {
        name: formValues.name,
        user_id: formValues.user_id,
    };

    const { error } = await supabaseClient
        .from("expense_category")
        .insert(newExpenseCategory)
        .select();

    if (error) {
        throw new Error(error.message);
    }

    return true;
};

interface UpdateExpenseCategoryParams {
    formValues: {
        id: number;
        name: string;
    };
}

// 소비 카테고리 수정
export const updateExpenseCategory = async ({
    formValues,
}: UpdateExpenseCategoryParams) => {
    const { error } = await supabaseClient
        .from("expense_category")
        .update({
            name: formValues.name,
        })
        .eq("id", formValues.id)
        .select();

    if (error) {
        throw new Error(error.message);
    }

    return true;
};

interface DeleteExpenseCategoryParams {
    formValues: {
        id: number;
    };
}

// 소비 카테고리 삭제
export const deleteExpenseCategory = async ({
    formValues,
}: DeleteExpenseCategoryParams) => {
    const { error } = await supabaseClient
        .from("expense_category")
        .delete()
        .eq("id", formValues.id)
        .select();

    if (error) {
        throw new Error(error.message);
    }

    return true;
};
