import supabaseClient from "@/supabase/supabaseClient";

export const getIncompleteChallenges = async () => {
    const response = await supabaseClient
        .from("challenge")
        .select()
        .eq("is_ended", false);

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
