import supabaseClient from "@/supabase/supabaseClient";
import { UserMetadata } from "@supabase/supabase-js";

import { create } from "zustand";

interface UserStore {
    user: UserMetadata | null;
    setUser: (user: UserMetadata | null) => void;
    getUser: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    getUser: async () => {
        const {
            data: { user },
            error,
        } = await supabaseClient.auth.getUser();

        if (error) {
            throw new Error(error.message);
        }

        set({ user: user?.user_metadata });
    },
}));
