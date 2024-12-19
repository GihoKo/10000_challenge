import connectDB from "@/lib/db/dbConnect";
import ExpenseCategoryModel from "@/models/ExpenseCategorySchema";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const { userId } = await req.json();

        if (!userId) {
            return NextResponse.json({
                errorMessage: "로그인 정보가 없습니다.",
                status: 400,
            });
        }

        await connectDB();

        const expenseCategory = ExpenseCategoryModel.find({ user_id: userId });

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
