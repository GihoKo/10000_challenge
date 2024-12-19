import connectDB from "@/lib/db/dbConnect";
import UserModel from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json({
                errorMessage: "입력된 정보가 올바르지 않습니다.",
                status: 400,
            });
        }

        await connectDB();

        // email로 user를 찾는다
        const user = await UserModel.findOne({ email });

        // 일치하는 user가 없는 경우 에러 처리
        if (!user) {
            return NextResponse.json({
                errorMessage: "이메일이 일치하는 유저가 없습니다.",
                status: 404,
            });
        }

        // password가 일치하는지 확인한다
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return NextResponse.json({
                errorMessage: "비밀번호가 일치하지 않습니다.",
                status: 401,
            });
        }

        // **주의 만약 서버 액션으로 응답을 보내는 경우 서버 액션에서 토큰을 생성해야한다.
        return NextResponse.json({
            status: 200,
            data: {
                id: user._id,
                email: user.email,
                user_name: user.user_name,
            },
        });
    } catch (error) {
        return NextResponse.json({
            errorMessage: "로그인에 실패했습니다.",
            status: 500,
        });
    }
}
