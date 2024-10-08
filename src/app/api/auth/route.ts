import { createClient } from "@/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { email, password } = await request.json();

    const supabaseClient = createClient();

    const response = await supabaseClient.auth.signInWithPassword({
        email,
        password,
    });

    if (response.error) {
        return NextResponse.json(
            { error: response.error.message },
            { status: 401 }
        );
    }

    const { session } = response.data;

    if (session) {
        const response = NextResponse.json(
            { message: "로그인 성공!" },
            { status: 200 }
        );

        response.cookies.set("access_token", session.access_token, {
            httpOnly: true, // JavaScript에서 쿠키 접근 불가
            secure: process.env.NEXT_PUBLIC_NODE_ENV === "production", // 프로덕션 환경에서는 Secure 설정
            maxAge: 60 * 60, // 쿠키 만료 시간: 1시간
            path: "/", // 모든 경로에서 쿠키 접근 가능
        });

        response.cookies.set("refresh_token", session.refresh_token, {
            httpOnly: true, // JavaScript에서 쿠키 접근 불가
            secure: process.env.NEXT_PUBLIC_NODE_ENV === "production", // 프로덕션 환경에서는 Secure 설정
            maxAge: 60 * 60 * 24, // 쿠키 만료 시간: 1일
            path: "/", // 모든 경로에서 쿠키 접근 가능
        });

        console.log(response);

        return response;
    }

    return NextResponse.json({ message: "서버 에러" }, { status: 500 });
}
