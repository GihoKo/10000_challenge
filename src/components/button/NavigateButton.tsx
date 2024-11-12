"use client";

import { useRouter } from "next/navigation";

interface NavigateButtonProps {
    type?: "button";
    path: string;
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

export default function NavigateButton({
    type = "button",
    path,
    width = "w-full",
    rounded = "rounded-lg",
    px = "px-4",
    py = "py-2",
    mt = "mt-0",
    mb = "mb-0",
    ml = "ml-0",
    mr = "mr-0",
    text = "확인",
}: NavigateButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(path);
    };

    return (
        <button
            className={`${width} ${rounded} ${px} ${py} ${mt} ${mb} ${ml} ${mr} bg-blue-600 flex justify-center items-center text-gray-100
                hover:bg-blue-800 transition-colors duration-300 
                `}
            type={type}
            onClick={handleClick}
        >
            {text}
        </button>
    );
}
