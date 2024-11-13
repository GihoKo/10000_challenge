import Link from "next/link";

export default function NavigateSignUpLink() {
    return (
        <div className="flex justify-center gap-2 ">
            <span className="text-gray-600 text-sm">계정이 없으신가요?</span>
            <Link href="/signUp" className="text-blue-500 text-sm">
                회원가입하기
            </Link>
        </div>
    );
}
