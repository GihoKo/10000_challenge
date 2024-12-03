import homeSvg from "@/images/svg/home-black.svg";
import moneySvg from "@/images/svg/money.svg";
import challengeSvg from "@/images/svg/challenge.svg";
import settingSvg from "@/images/svg/setting-black.svg";
import { StaticImageData } from "next/image";

interface NavigationItem {
    name: string;
    href: string;
    image: StaticImageData;
}

type NavigationItems = NavigationItem[];

const NAVIGATION_ITEMS: NavigationItems = [
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
        href: "/home/challenge",
        image: challengeSvg,
    },
    {
        name: "세팅",
        href: "/home/setting",
        image: settingSvg,
    },
];

export default NAVIGATION_ITEMS;
