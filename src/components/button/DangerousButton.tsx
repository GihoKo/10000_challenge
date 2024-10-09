interface DangerousButtonProps {
    type?: "button" | "submit";
    width?: string;
    rounded?: string;
    px?: string;
    py?: string;
    text?: string;
    onClick?: () => void;
}

export default function DangerousButton({
    type = "button",
    width = "w-full",
    rounded = "rounded-lg",
    px = "px-4",
    py = "py-2",
    text = "취소",
    onClick,
}: DangerousButtonProps) {
    const handleClick = () => {
        if (!onClick) return;
        onClick();
    };

    return (
        <button
            className={`${width} ${rounded} ${px} ${py} bg-red-500 flex justify-center items-center text-white`}
            type={type}
            onClick={handleClick}
        >
            {text}
        </button>
    );
}
