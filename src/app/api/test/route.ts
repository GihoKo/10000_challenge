import PostModel from "@/app/models/postModel";
import dbConnect from "@/lib/db/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    console.log("get");

    try {
        await dbConnect();

        const allUsers = await PostModel.find({});
        console.log(allUsers);

        return NextResponse.json({ message: "Hello World" });
    } catch (error) {
        console.error(error);
    }
}
