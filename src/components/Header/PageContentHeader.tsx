interface PageContentHeaderProps {
    text: string;
}

export default function PageContentHeader({ text }: PageContentHeaderProps) {
    return <h2 className="text-2xl font-bold mb-3.5">{text}</h2>;
}
