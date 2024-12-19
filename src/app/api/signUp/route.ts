import dbConnect from "@/lib/db/dbConnect";
import UserModel from "@/models/user";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { email, password, user_name } = await req.json();

    if (!email || !password || !user_name) {
        return NextResponse.json({
            message: "입력된 정보가 올바르지 않습니다.",
            status: 400,
        });
    }

    const newUser = {
        email,
        password,
        user_name,
    };

    try {
        await dbConnect();

        const response = await UserModel.create(newUser);

        return NextResponse.json({
            message: "성공적으로 생성되었습니다.",
            status: 201,
            data: {
                id: response._id,
                email: response.email,
                user_name: response.user_name,
            },
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "회원가입에 실패했습니다.",
            status: 400,
        });
    }
}
