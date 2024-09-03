"use client";

import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <>
            <header className="flex flex-col gap-1.5 p-6">
                <h3 className="flex justify-center text-2xl font-semibold">
                    만원 챌린지
                </h3>
                {pathname === "/signIn" ? (
                    <p className="flex justify-center text-gray-600 text-sm">
                        로그인을 위해 이메일과 비밀번호를 입력해주세요.
                    </p>
                ) : (
                    <p className="flex justify-center text-gray-600 text-sm">
                        회원가입을 위해 이메일과 비밀번호, 비밀번호 확인을
                        입력해주세요.
                    </p>
                )}
            </header>
        </>
    );
}
