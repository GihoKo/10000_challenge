"use client";

import Link from "next/link";

interface LinkToSignInProps {
    href: string;
    width?: string;
    rounded?: string;
    px?: string;
    py?: string;
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
    text?: string;
}

export default function DefaultNavigateLink({
    href,
    width = "w-full",
    rounded = "rounded-lg",
    px = "px-4",
    py = "py-2",
    mt = "mt-0",
    mb = "mb-0",
    ml = "ml-0",
    mr = "mr-0",
    text = "이동",
}: LinkToSignInProps) {
    return (
        <Link
            className={`${width} ${rounded} ${px} ${py} ${mt} ${mb} ${ml} ${mr} bg-blue-600 flex justify-center items-center text-gray-100
                hover:bg-blue-800 transition-colors duration-300 
                `}
            href={href}
        >
            {text}
        </Link>
    );
}
