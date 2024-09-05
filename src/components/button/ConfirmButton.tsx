interface ConfirmButtonProps {
    type?: "button" | "submit";
    width?: string;
    rounded?: string;
    px?: string;
    py?: string;
    text?: string;
}

export default function ConfirmButton({
    type = "button",
    width = "w-full",
    rounded = "rounded-lg",
    px = "px-4",
    py = "py-2",
    text = "확인",
}: ConfirmButtonProps) {
    return (
        <button
            className={`${width} ${rounded} ${px} ${py} bg-blue-600 flex justify-center items-center text-gray-100`}
            type={type}
        >
            {text}
        </button>
    );
}
