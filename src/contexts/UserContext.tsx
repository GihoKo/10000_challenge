"use client";

import { UserMetadata } from "@supabase/supabase-js";
import { createContext, useContext } from "react";

export type User = UserMetadata | null | undefined;

const UserContext = createContext<User>({
    user: null,
});

export const useUser = () => {
    return useContext(UserContext);
};

interface UserContextProps {
    children: React.ReactNode;
    user: User | undefined;
}

export const UserProvider = ({ children, user }: UserContextProps) => {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
