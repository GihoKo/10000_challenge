interface ModalNameProps {
    text: string;
}

export default function ModalName({ text }: ModalNameProps) {
    return <h3 className="text-lg">{text}</h3>;
}
