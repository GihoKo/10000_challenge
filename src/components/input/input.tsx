interface InputProps {
    id: string;
    type: string;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
    id,
    type,
    placeholder,
    value,
    onChange,
}: InputProps) {
    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border-2 ${
                value !== "" ? "border-blue-500" : "border-gray-300"
            } rounded-md w-full p-4
                focus:outline-none focus:border-blue-500 transition-all duration-300`}
        />
    );
}
