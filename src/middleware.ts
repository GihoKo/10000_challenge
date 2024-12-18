import { type NextRequest } from "next/server";
// import { updateSession } from "./supabase/middleware";

export async function middleware(request: NextRequest) {
    // return await updateSession(request);
    return null;
}

export const config = {
    matcher: [
        "/expenses/:path*",
        "/home/:path*",
        "/previous-challenges/:path*",
    ],
};
