interface NagativeButtonProps {
    type?: "button" | "submit";
    width?: string;
    rounded?: string;
    px?: string;
    py?: string;
    text?: string;
}

export default function NagativeButton({
    type = "button",
    width = "w-full",
    rounded = "rounded-lg",
    px = "px-4",
    py = "py-2",
    text = "취소",
}: NagativeButtonProps) {
    return (
        <button
            className={`${width} ${rounded} ${px} ${py} bg-red-600 flex justify-center items-center text-gray-100`}
            type={type}
        >
            {text}
        </button>
    );
}
