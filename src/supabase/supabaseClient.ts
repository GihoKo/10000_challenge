import { createClient } from "@supabase/supabase-js";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

if (!supabaseURL || !supabaseApiKey) {
    throw new Error("Supabase 정보가 설정되지 않았습니다.");
}

const supabaseClient = createClient(supabaseURL, supabaseApiKey);

export default supabaseClient;
