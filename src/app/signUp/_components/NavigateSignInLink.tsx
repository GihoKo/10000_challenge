import Link from "next/link";

export default function NavigateSignInLink() {
    return (
        <div className="flex justify-center gap-2 ">
            <span className="text-gray-600 text-sm">계정이 있으신가요?</span>
            <Link href="/signIn" className="text-blue-500 text-sm">
                로그인하기
            </Link>
        </div>
    );
}
