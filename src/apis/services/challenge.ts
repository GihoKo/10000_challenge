import supabaseClient from "@/supabase/client";
import createStartDate from "@/utils/createStartDate";

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

// 종료되지 않은 챌린지 목록
export const getIncompleteChallenges = async () => {
    const response = await supabaseClient
        .from("challenge")
        .select()
        .eq("is_ended", false);

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
    formValues: {
        name: string;
        resolution: string;
        dailySaving: number;
        goalDate: string;
    };
}

// 챌린지 추가
const addChallenge = async ({ formValues }: AddChallengeParams) => {
    const newChallenge = {
        name: formValues.name,
        resolution: formValues.resolution,
        daily_saving: formValues.dailySaving,
        start_date: createStartDate(),
        goal_date: formValues.goalDate,
        user_id: process.env.NEXT_PUBLIC_USER_ID,
    };

    const { error } = await supabaseClient
        .from("challenge")
        .insert(newChallenge)
        .select();

    if (error) {
        console.error(error.message);
    }

    return true;
};

interface DeleteChallengeParams {
    challengeId: string | string[];
}

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
    challengeId: string | undefined;
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
