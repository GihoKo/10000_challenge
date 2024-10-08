import { createBrowserClient } from "@supabase/ssr";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

if (!supabaseURL || !supabaseApiKey) {
    throw new Error("Supabase 정보가 설정되지 않았습니다.");
}

function createClient() {
    return createBrowserClient(supabaseURL!, supabaseApiKey!);
}

const supabaseServerClient = createClient();

export default supabaseServerClient;
