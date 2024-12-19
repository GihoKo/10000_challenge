"use server";

import generateToken from "@/utils/generateToken";
import { cookies } from "next/headers";

export async function signIn(formData: FormData) {
    try {
        const user = {
            email: formData.get("email") as string,
            password: formData.get("password") as string,
        };

        const response = await fetch("http://localhost:3000/api/signIn", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const responseData = await response.json();

        if (responseData.errorMessage) {
            return responseData;
        }

        // 토큰 생성
        const token = generateToken(responseData.data, 3600);

        // 생성된 토큰을 쿠키에 저장한다.
        cookies().set("token", token, {
            maxAge: 3600,
        });

        // 로그인 성공시
        return {
            status: responseData.status,
            user: {
                id: responseData.data.id,
                email: responseData.data.email,
                user_name: responseData.data.user_name,
            },
        };
    } catch (error) {
        return {
            status: 500,
            message: "로그인에 실패했습니다.",
        };
    }
}

export async function signUp(formData: FormData) {
    const newUser = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        user_name: formData.get("user_name") as string,
    };

    try {
        const response = await fetch("http://localhost:3000/api/signUp", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const responseData = await response.json();

        if (responseData.errorMessage) {
            return responseData;
        }

        // 토큰 생성
        const token = generateToken(responseData.data, 3600);

        // 생성된 토큰을 쿠키에 저장한다.
        cookies().set("token", token, {
            maxAge: 3600,
        });

        if (responseData.error) {
            return {
                message: responseData.message,
            };
        }

        return {
            status: responseData.status,
            user: {
                id: responseData.data.id,
                email: responseData.data.email,
                user_name: responseData.data.user_name,
            },
        };
    } catch (error) {
        return {
            status: 500,
            message: "회원가입에 실패했습니다.",
        };
    }
}
