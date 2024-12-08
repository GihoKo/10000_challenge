interface ModalFormProps {
    children: React.ReactNode;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function ModalForm({ children, onSubmit }: ModalFormProps) {
    return (
        <form className="flex flex-col gap-2 mt-4" onSubmit={onSubmit}>
            {children}
        </form>
    );
}
