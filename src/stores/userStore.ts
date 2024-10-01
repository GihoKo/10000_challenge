import supabaseClient from "@/supabase/supabaseClient";
import { User } from "@supabase/supabase-js";

import { create } from "zustand";

interface UserStore {
    user: User | null;
    setUser: (user: User | null) => void;
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

        set({ user: user });
    },
}));
