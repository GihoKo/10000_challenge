import { createClient } from "@supabase/supabase-js";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseURL || !supabaseKey) {
    throw new Error("Supabase 정보가 설정되지 않았습니다.");
}

const supabaseClient = createClient(supabaseURL, supabaseKey);

export default supabaseClient;
