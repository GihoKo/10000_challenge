import verifyToken from "@/utils/verifyToken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const token = cookies().get("token")?.value;

        if (!token) {
            return NextResponse.json({
                errorMessage: "로그인 정보가 없습니다.",
                status: 400,
            });
        }

        // token을 확인하고 유효성을 검사한다.
        if (verifyToken(token).valid) {
            // token이 유효하면 유저 데이터를 해석한다
            const user = verifyToken(token).decoded;

            return NextResponse.json({
                status: 200,
                data: {
                    id: user?.id,
                    email: user?.email,
                    user_name: user?.user_name,
                },
            });
        } else {
            return NextResponse.json({
                errorMessage: "로그인 정보가 없습니다.",
                status: 400,
            });
        }
    } catch (error) {
        return NextResponse.json({
            errorMessage: "오류가 발생했습니다.",
            status: 500,
        });
    }
}
