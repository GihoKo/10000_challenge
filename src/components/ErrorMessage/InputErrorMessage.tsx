export default function InputErrorMessage({ message }: { message: string }) {
    if (!message) return null;
    return <p className="text-red-500 text-sm">{message}</p>;
}
