interface NagativeButtonProps {
    type?: "button" | "submit";
    width?: string;
    rounded?: string;
    px?: string;
    py?: string;
    text?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function NagativeButton({
    type = "button",
    width = "w-full",
    rounded = "rounded-lg",
    px = "px-4",
    py = "py-2",
    text = "취소",
    onClick = () => {},
}: NagativeButtonProps) {
    return (
        <button
            className={`${width} ${rounded} ${px} ${py} bg-transparent flex justify-center items-center`}
            type={type}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
