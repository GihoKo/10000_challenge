export default function Input({
    type,
    placeholder,
}: {
    type: string;
    placeholder: string;
}) {
    return (
        <input
            type={type}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-blue-600"
            placeholder={placeholder}
        />
    );
}
