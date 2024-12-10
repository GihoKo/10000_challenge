"use client";

import DangerousButton from "@/components/button/DangerousButton";
import supabaseClient from "@/supabase/client";
import { useRouter } from "next/navigation";
import rightArrowSvg from "@/images/svg/right-arrow.svg";
import ImageWrapper from "@/components/ImageWrapper";
import Link from "next/link";
import { useUser } from "@/contexts/UserContext";

export default function Main() {
    const router = useRouter();
    const user = useUser();

    const handleLogOutButtonClick = () => {
        supabaseClient.auth.signOut();
        router.push("/");
    };

    return (
        <main className="flex flex-col gap-4">
            <div className="rounded-xl bg-blue-50 flex flex-col gap-4 p-4">
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

            <div className="rounded-xl bg-blue-100 flex flex-col gap-4 p-4">
                <Link
                    href="/home/setting/expenseCategory"
                    className="flex justify-between items-center"
                >
                    <span className="font-bold">소비 카테고리 관리</span>
                    <ImageWrapper
                        src={rightArrowSvg}
                        alt="오른쪽 화살표 이미지"
                        width={24}
                        height={24}
                    />
                </Link>
            </div>

            <div className="rounded-xl bg-blue-50 flex flex-col gap-4 p-4">
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
