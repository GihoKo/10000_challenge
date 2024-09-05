interface LabelProps {
    htmlFor: string;
    text: string;
    children: React.ReactNode;
}

export default function Label({ htmlFor, text, children }: LabelProps) {
    return (
        <label htmlFor={htmlFor} className="flex flex-col gap-1 relative">
            {text}
            {children}
        </label>
    );
}
