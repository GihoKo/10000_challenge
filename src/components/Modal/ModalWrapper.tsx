export default function ModalWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="flex flex-col gap-2">{children}</div>;
}
