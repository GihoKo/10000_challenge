import dbConnect from "@/lib/db/dbConnect";
import UserModel from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, password, user_name } = await req.json();

        if (!email || !password || !user_name) {
            return NextResponse.json({
                errorMessage: "입력된 정보가 올바르지 않습니다.",
                status: 400,
            });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return NextResponse.json({
                errorMessage: "이미 존재하는 이메일입니다.",
                status: 400,
            });
        }

        const newUser = {
            email,
            password,
            user_name,
        };

        await dbConnect();

        const user = await UserModel.create(newUser);

        return NextResponse.json({
            status: 200,
            data: {
                id: user._id,
                email: user.email,
                user_name: user.user_name,
            },
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            errorMessage: "회원가입에 실패했습니다.",
            status: 500,
        });
    }
}
