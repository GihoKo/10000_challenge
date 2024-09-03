import Image from "next/image";
import Logo from "@/images/logo.png";

export default function SignIn() {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-6 px-3">
            <div className="w-full flex-col">
                <div className="flex justify-center">
                    <Image src={Logo} alt="logo" width={100} height={100} />
                </div>
                <div className="flex flex-col gap-1.5 p-6">
                    <h3 className="flex justify-center text-2xl font-semibold">
                        만원 챌린지
                    </h3>
                    <p className="flex justify-center text-gray-600 text-sm">
                        이메일과 비밀번호를 입력해주세요.
                    </p>
                </div>
                <form className="flex flex-col gap-6 p-6">
                    <div className="flex flex-col gap-4">
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium">Email</span>
                            <input
                                type="email"
                                className="peer border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-blue-600"
                                placeholder="이메일을 입력해주세요."
                            />
                        </label>
                        <label className="flex flex-col gap-2">
                            <span className="text-sm font-medium">
                                Password
                            </span>
                            <input
                                type="password"
                                className="peer border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-blue-600"
                                placeholder="비밀번호를 입력해주세요."
                            />
                        </label>
                    </div>
                    <button
                        className="w-full rounded-lg bg-blue-600 flex justify-center items-center px-4 py-2 text-gray-100"
                        type="submit"
                    >
                        로그인
                    </button>
                </form>
            </div>
        </div>
    );
}
