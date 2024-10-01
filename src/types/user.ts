// supabase에서 반환되는 유저관련 데이터 타입
export interface UserData {
    id: string;
    aud: string;
    role: string;
    email: string;
    email_confirmed_at: string;
    phone: string;
    confirmed_at: string;
    last_sign_in_at: string;
    app_metadata: AppMetadata;
    user_metadata: UserMetadata;
    identities: Identity[];
    created_at: string;
    updated_at: string;
    is_anonymous: boolean;
}

interface AppMetadata {
    provider: string;
    providers: string[];
}

interface UserMetadata {
    email: string;
    email_verified: boolean;
    phone_verified: boolean;
    sub: string;
}

interface Identity {
    identity_id: string;
    id: string;
    user_id: string;
    identity_data: IdentityData;
    provider: string;
    last_sign_in_at: string;
    created_at: string;
    updated_at: string;
    email: string;
}

interface IdentityData {
    email: string;
    email_verified: boolean;
    phone_verified: boolean;
    sub: string;
}

export interface SupabaseUserResponse {
    data: {
        user: UserData;
    };
    error: any;
}

// 여기까지가 supabase에서 반환되는 유저 데이터 타입
