import homeSvg from "@/images/svg/home-black.svg";
import moneySvg from "@/images/svg/money.svg";
import challengeSvg from "@/images/svg/challenge.svg";
import ImageWrapper from "@/components/ImageWrapper";
import Link from "next/link";
import settingSvg from "@/images/svg/setting-black.svg";

// @ToDo 설정 페이지 구현
const navigationItems = [
    {
        name: "홈",
        href: "/home",
        image: homeSvg,
    },
    {
        name: "지출",
        href: "/home/expenses",
        image: moneySvg,
    },
    {
        name: "챌린지",
        href: "/home/previous-challenges",
        image: challengeSvg,
    },
    {
        name: "세팅",
        href: "/home/setting",
        image: settingSvg,
    },
];

export default function NavigationBar() {
    return (
        <div className="max-w-[600px] w-full bg-white fixed bottom-0 z-10">
            <div className="rounded-t-xl bg-blue-100 w-full h-8"></div>
            <div className="flex justify-evenly items-center w-full">
                {navigationItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="flex flex-col items-center justify-between bg-white pb-2 pt-1 group"
                    >
                        <div
                            className="rounded-full overflow-hidden w-12 h-12 flex justify-center items-center bg-white
                            group-hover:ring-8 group-hover:ring-blue-100 group-hover:-translate-y-6 transition-all duration-300"
                        >
                            <ImageWrapper
                                src={item.image}
                                alt={item.name}
                                width={32}
                                height={32}
                            />
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-black">
                            {item.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
