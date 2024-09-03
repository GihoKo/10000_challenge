interface LabelProps {
    children: React.ReactNode;
    text: string;
}

export default function Label({ children, text }: LabelProps) {
    return (
        <label className="flex flex-col gap-2">
            <span className="text-sm font-medium">{text}</span>
            {/* Input이 들어간다 */}
            {children}
        </label>
    );
}
