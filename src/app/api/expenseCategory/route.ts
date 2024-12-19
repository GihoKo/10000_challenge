import connectDB from "@/lib/db/dbConnect";
import ExpenseCategoryModel from "@/models/ExpenseCategorySchema";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const user_id = searchParams.get("userId");

        if (!user_id) {
            return NextResponse.json({
                errorMessage: "로그인 정보가 없습니다.",
                status: 400,
            });
        }

        await connectDB();

        const expenseCategory = await ExpenseCategoryModel.find({ user_id });

        return NextResponse.json({
            status: 200,
            data: expenseCategory,
        });
    } catch (error) {
        return NextResponse.json({
            errorMessage: "오류가 발생했습니다.",
            status: 500,
        });
    }
}

export async function POST(req: Request) {
    try {
        const { name, user_id } = await req.json();

        if (!name || !user_id) {
            return NextResponse.json({
                errorMessage: "이름과 유저 ID가 없습니다.",
                status: 400,
            });
        }

        await connectDB();

        const newExpenseCategory = {
            name,
            user_id: user_id,
        };

        const expenseCategory = await ExpenseCategoryModel.create(
            newExpenseCategory
        );

        return NextResponse.json({
            status: 200,
            data: expenseCategory,
        });
    } catch (error) {
        return NextResponse.json({
            errorMessage: "오류가 발생했습니다.",
            status: 500,
        });
    }
}
