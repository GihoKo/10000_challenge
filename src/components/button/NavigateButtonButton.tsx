"use client";

import { useRouter } from "next/navigation";

interface NavigateButtonButtonProps {
    type?: "button";
    path: string;
    width?: string;
    rounded?: string;
    px?: string;
    py?: string;
    text?: string;
}

export default function NavigateButtonButton({
    type = "button",
    path,
    width = "w-full",
    rounded = "rounded-lg",
    px = "px-4",
    py = "py-2",
    text = "확인",
}: NavigateButtonButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        router.push(path);
    };

    return (
        <button
            className={`${width} ${rounded} ${px} ${py} bg-blue-600 flex justify-center items-center text-gray-100
                hover:bg-blue-800 transition-colors duration-300
                `}
            type={type}
            onClick={handleClick}
        >
            {text}
        </button>
    );
}
