"use client";

import { UserMetadata } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";

export interface User {
    id: string;
    email: string;
    user_name: string;
}

interface UserContextProps {
    user: User | null;
    setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextProps>({
    user: null,
    setUser: () => {},
});

interface UserProviderProps {
    children: React.ReactNode;
    userData: UserMetadata | undefined;
}

export const UserProvider = ({ children, userData }: UserProviderProps) => {
    const [user, setUser] = useState<User | null>(() => {
        return userData
            ? {
                  id: userData?.sub,
                  email: userData?.email,
                  user_name: userData?.user_name,
              }
            : null;
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
