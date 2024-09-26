interface LabelProps {
    children: React.ReactNode;
    text: string;
    htmlFor: string;
}

export default function Label({ children, text, htmlFor }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className="flex flex-col gap-2">
            <span className="text-sm font-medium">{text}</span>
            {/* Input이 들어간다 */}
            {children}
        </label>
    );
}
