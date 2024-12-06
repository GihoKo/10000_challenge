import supabaseClient from "@/supabase/client";

interface GetExpenseCategoryByUserIdParams {
    userId: string;
}

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
