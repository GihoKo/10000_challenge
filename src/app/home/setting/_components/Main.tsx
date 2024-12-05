"use client";

import DangerousButton from "@/components/button/DangerousButton";
import { useUserStore } from "@/stores/userStore";
import supabaseClient from "@/supabase/client";
import { useRouter } from "next/navigation";

export default function Main() {
    const { user, signOut } = useUserStore();
    const router = useRouter();

    const handleLogOutButtonClick = () => {
        supabaseClient.auth.signOut();
        signOut();
        router.push("/");
    };

    return (
        <main>
            <div className="flex flex-col gap-4 py-4">
                <div className="font-bold">유저 정보</div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600">유저 이름</span>
                    <span>{user?.user_name}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">유저 이메일</span>
                    <span>{user?.email}</span>
                </div>
            </div>

            <div className="w-full h-1 bg-gray-200 my-2" />

            <div className="flex flex-col gap-4 py-4">
                <div className="font-bold">소비 카테고리 관리</div>
                <div>카테고리 영역</div>
                <div>카테고리 관리 버튼</div>
            </div>

            <div className="w-full h-1 bg-gray-200 my-2" />

            <div className="flex flex-col gap-4 py-4">
                <div className="font-bold">로그아웃</div>
                <div className="flex justify-end">
                    <DangerousButton
                        text="로그아웃"
                        width="w-auto"
                        onClick={handleLogOutButtonClick}
                    />
                </div>
            </div>
        </main>
    );
}
