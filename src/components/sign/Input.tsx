export default function Input({
    type,
    placeholder,
    name,
    value,
    onChange,
}: {
    type: string;
    placeholder: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <input
            name={name}
            type={type}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-blue-600"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}
