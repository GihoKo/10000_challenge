import { ExpenseCategory } from "@/app/home/setting/expenseCategory/_components/Main/Main.type";
import supabaseClient from "@/supabase/client";

// 모든 챌린지 목록
export const getAllChallenges = async () => {
    const response = await supabaseClient
        .from("challenge")
        .select()
        .order("start_date");

    if (response.error) {
        throw new Error(response.error.message);
    }

    return response.data;
};

interface GetIncompleteChallengesByUserId {
    userId: string | undefined;
}

// 종료되지 않은 챌린지 목록
export const getIncompleteChallengesByUserId = async ({
    userId,
}: GetIncompleteChallengesByUserId) => {
    const response = await supabaseClient
        .from("challenge")
        .select()
        .eq("is_ended", false)
        .eq("user_id", userId);

    if (response.error) {
        throw new Error(response.error.message);
    }

    return response.data;
};

// 종료된 챌린지 목록
export const getCompletedChallenges = async () => {
    const response = await supabaseClient
        .from("challenge")
        .select()
        .eq("is_ended", true);

    if (response.error) {
        throw response.error;
    }

    return response;
};

interface GetChallengeByIdParams {
    challengeId: string | string[];
}

export const getChallengeById = async ({
    challengeId,
}: GetChallengeByIdParams) => {
    const { data, error } = await supabaseClient
        .from("challenge")
        .select()
        .eq("id", challengeId);

    if (error) {
        throw error;
    }

    return data[0];
};

interface AddChallengeParams {
    challenge: {
        name: string;
        resolution: string;
        daily_saving: number;
        goal_date: string;
        start_date: string;
    };
    expenseCategoriesOfChallenge: ExpenseCategory[];
    userId: string;
}

// 챌린지 추가 및 챌린치의 지출 카테고리 추가
export const addChallenge = async ({
    challenge,
    expenseCategoriesOfChallenge,
    userId,
}: AddChallengeParams) => {
    const { data: challengeData, error } = await supabaseClient
        .from("challenge")
        .insert(challenge)
        .select("id")
        .single();

    if (error) {
        console.error(error.message);
    }

    if (!challengeData) return;
    const challengeId = challengeData.id;

    const connectionData = expenseCategoriesOfChallenge.map((category) => ({
        challenge_id: String(challengeId),
        expense_category_id: Number(category.id),
        user_id: userId,
    }));

    const { error: connectionError } = await supabaseClient
        .from("challenge_expense_category")
        .insert(connectionData)
        .select();

    if (connectionError) {
        console.error(connectionError.message);
    }

    return true;
};

interface UpdatedChallengeParams {
    challengeId: string | string[];
    updatedChallenge: UpdatedChallenge;
}

interface UpdatedChallenge {
    name: string;
    resolution: string;
    daily_saving: number;
    goal_date: string;
    user_id: string | undefined;
}

// 챌린지 수정
export const updateChallenge = async ({
    challengeId,
    updatedChallenge,
}: UpdatedChallengeParams) => {
    const { data, error } = await supabaseClient
        .from("challenge")
        .update(updatedChallenge)
        .eq("id", challengeId)
        .select();

    if (error) {
        throw new Error(error.message);
    }

    return data;
};

interface DeleteChallengeParams {
    challengeId: string | string[];
}

// 챌린지 삭제
export const deleteChallenge = async ({
    challengeId,
}: DeleteChallengeParams) => {
    const { error } = await supabaseClient
        .from("challenge")
        .delete()
        .eq("id", challengeId)
        .select();

    if (error) {
        throw error;
    }

    return null;
};

interface endChallengeParams {
    challengeId: string | string[];
}

export const endChallenge = async ({ challengeId }: endChallengeParams) => {
    const response = await supabaseClient
        .from("challenge")
        .update({
            is_ended: true,
        })
        .eq("id", challengeId);

    if (response.error) {
        throw response.error;
    }

    return response;
};
