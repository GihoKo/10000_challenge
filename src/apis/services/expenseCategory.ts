import { ExpenseCategory } from "@/app/home/setting/expenseCategory/_components/Main/Main.type";
import supabaseClient from "@/supabase/client";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL 환경변수가 설정되지 않았습니다.");
}

interface GetExpenseCategoryByUserIdParams {
    userId: string | undefined;
}

// 소비 카테고리 목록 조회
export const getExpenseCategoryByUserId = async ({
    userId,
}: GetExpenseCategoryByUserIdParams) => {
    // const response = await supabaseClient
    //     .from("expense_category")
    //     .select()
    //     .eq("user_id", userId);
    try {
        console.log(userId);

        const response = await fetch(`${API_URL}/expenseCategory`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: userId,
            }),
        });

        const responseData = await response.json();

        console.log(responseData);

        if (responseData.errorMessage) {
            throw new Error(responseData.errorMessage);
        }

        return responseData.data;
    } catch (error) {
        console.log(error);
    }
};

interface GetExpenseCategoryByChallengeIdParams {
    challengeId: string | string[];
}

interface GetExpenseCategoryByChallengeIdResponse {
    expense_category: {
        id: number;
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
            id: item.expense_category.id,
            name: item.expense_category.name,
            user_id: item.expense_category.user_id,
            created_at: item.expense_category.created_at,
        };
    });

    return formattedData;
};

interface AddExpenseCategoriesToChallengeParams {
    challengeId: string | string[];
    addedExpenseCategoriesOfChallenge: ExpenseCategory[];
    userId: string | undefined;
}

// challenge의 카테고리 목록 추가
export const addExpenseCategoriesToChallenge = async ({
    challengeId,
    addedExpenseCategoriesOfChallenge,
    userId,
}: AddExpenseCategoriesToChallengeParams) => {
    const { error } = await supabaseClient
        .from("challenge_expense_category")
        .insert(
            addedExpenseCategoriesOfChallenge.map((category) => ({
                challenge_id: String(challengeId),
                expense_category_id: Number(category.id),
                user_id: userId,
            }))
        )
        .select();

    if (error) {
        throw new Error(error.message);
    }

    return true;
};

// challenge의 카테고리 목록 삭제
interface DeleteExpenseCategoriesToChallengeParams {
    data: {
        challengeId: string | string[];
        deletedExpenseCategoriesOfChallenge: ExpenseCategory[];
    };
}

export const deleteExpenseCategoriesToChallenge = async ({
    data,
}: DeleteExpenseCategoriesToChallengeParams) => {
    const idsToDelete = data.deletedExpenseCategoriesOfChallenge.map(
        (category) => category.id
    );

    const { error } = await supabaseClient
        .from("challenge_expense_category")
        .delete()
        .in("expense_category_id", idsToDelete)
        .eq("challenge_id", data.challengeId)
        .select();

    if (error) {
        throw new Error(error.message);
    }
};

interface AddExpenseCategoryParams {
    name: string;
    userId: string | undefined;
}

// 소비 카테고리 추가
export const addExpenseCategory = async ({
    name,
    userId,
}: AddExpenseCategoryParams) => {
    const newExpenseCategory = {
        name: name,
        user_id: userId,
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
    expenseCategoryId: number;
}

// 소비 카테고리 삭제
export const deleteExpenseCategory = async ({
    expenseCategoryId,
}: DeleteExpenseCategoryParams) => {
    const { error } = await supabaseClient
        .from("expense_category")
        .delete()
        .eq("id", expenseCategoryId)
        .select();

    if (error) {
        throw new Error(error.message);
    }

    return true;
};
