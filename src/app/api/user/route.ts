import dbConnect from "@/lib/db/dbConnect";
import UserModel from "@/models/user";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        await dbConnect();

        const allUsers = await UserModel.find({});

        console.log(allUsers);

        return NextResponse.json({ message: "Hello World" });
    } catch (error) {
        console.error(error);
    }
}
