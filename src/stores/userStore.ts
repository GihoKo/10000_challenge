import supabaseClient from "@/supabase/client";
import { UserMetadata } from "@supabase/supabase-js";

import { create } from "zustand";

interface UserStore {
    user: UserMetadata | null;
    setUser: (user: UserMetadata | null) => void;
    getUser: () => Promise<void>;
    signOut: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    getUser: async () => {
        const {
            data: { session },
            error: sessionError,
        } = await supabaseClient.auth.getSession();

        if (sessionError || !session) {
            console.error("No session found:", sessionError?.message);
            set({ user: null });
            return;
        }

        const {
            data: { user },
            error: userError,
        } = await supabaseClient.auth.getUser();

        if (userError) {
            throw new Error(userError.message);
        }

        set({ user: user?.user_metadata });
    },
    signOut: () => {
        supabaseClient.auth.signOut();
        set({ user: null });
    },
}));
