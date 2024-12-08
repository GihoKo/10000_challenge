"use client";

import { useUserStore } from "@/stores/userStore";
import supabaseClient from "@/supabase/client";
import { UserMetadata } from "@supabase/supabase-js";
import { useEffect } from "react";

export default function RenewUser() {
    const { setUser } = useUserStore();

    useEffect(() => {
        const getUser = async () => {
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

        getUser();
    }, [setUser]);

    return null;
}
