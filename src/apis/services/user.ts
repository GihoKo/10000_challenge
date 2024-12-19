import { User } from "@/contexts/UserContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL 환경변수가 설정되지 않았습니다.");
}

export const getUser = async (): Promise<User> => {
    const response = await fetch(`${API_URL}/auth/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            credentials: "include",
        },
    });

    const { data: user } = await response.json();

    return user;
};
