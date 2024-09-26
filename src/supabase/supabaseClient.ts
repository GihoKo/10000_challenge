import { createClient } from "@supabase/supabase-js";

if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_KEY
) {
    throw new Error("Supabase 정보가 설정되지 않았습니다.");
}

const supabaseClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export default supabaseClient;
