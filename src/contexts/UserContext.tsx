"use client";

import { getUser } from "@/apis/services/user";
import { createContext, useContext, useEffect, useState } from "react";

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
}

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        getUser().then((user) => {
            setUser(user);
        });
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
