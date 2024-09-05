interface NavigateButtonButtonProps {
    type?: "button";
    width?: string;
    rounded?: string;
    px?: string;
    py?: string;
    text?: string;
}

export default function NavigateButtonButton({
    type = "button",
    width = "w-full",
    rounded = "rounded-lg",
    px = "px-4",
    py = "py-2",
    text = "확인",
}: NavigateButtonButtonProps) {
    return (
        <button
            className={`${width} ${rounded} ${px} ${py} bg-blue-600 flex justify-center items-center text-gray-100
                hover:bg-blue-800 transition-colors duration-300
                `}
            type={type}
        >
            {text}
        </button>
    );
}
