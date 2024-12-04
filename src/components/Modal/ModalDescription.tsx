interface ModalDescriptionProps {
    text: string;
}

export default function ModalDescription({ text }: ModalDescriptionProps) {
    return <p className="text-sm text-gray-500">{text}</p>;
}
