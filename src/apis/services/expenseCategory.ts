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
