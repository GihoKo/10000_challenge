import { type NextRequest } from "next/server";
import { updateSession } from "./src/supabase/middleware";

export async function middleware(request: NextRequest) {
    return await updateSession(request);
}

export const config = {
    matcher: [
        "/expenses/:path*",
        "/home/:path*",
        "/previous-challenges/:path*",
    ],
};
