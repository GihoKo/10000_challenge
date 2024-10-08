interface ButtonProps {
    type?: "button" | "submit" | "reset";
    text: string;
    formAction?: (formData: FormData) => Promise<void>;
}

export default function Button({ type, text, formAction }: ButtonProps) {
    return (
        <button
            className="w-full rounded-lg bg-blue-600 flex justify-center items-center px-4 py-2 text-gray-100"
            type={type}
            formAction={formAction}
        >
            {text}
        </button>
    );
}
