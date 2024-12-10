import { useUserStore } from "@/stores/userStore";
import supabaseClient from "@/supabase/client";
import { UserMetadata } from "@supabase/supabase-js";

export const renewUser = async () => {
    const setUser = useUserStore.getState().setUser;

    const {
        data: { session },
        error: sessionError,
    } = await supabaseClient.auth.getSession();

    if (sessionError || !session) {
        console.error("No session found:", sessionError?.message);
        return;
    }

    const {
        data: { user },
        error: userError,
    } = await supabaseClient.auth.getUser();

    if (userError) {
        throw new Error(userError.message);
    }

    setUser(user?.user_metadata as UserMetadata);
};
