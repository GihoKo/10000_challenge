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

        return response;
    }

    return NextResponse.json({ message: "서버 에러" }, { status: 500 });
}
