import NagativeButton from "@/components/button/NagativeButton";
import { MainHeaderProps } from "./MainHeader.type";

export default function MainHeader({
    challenge,
    handleDeleteModalOpen,
}: MainHeaderProps) {
    return (
        <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">{challenge?.name}</h3>

            <NagativeButton
                type="button"
                text="삭제"
                rounded="rounded-md"
                px="px-2"
                py="py-1"
                width="w-auto"
                onClick={handleDeleteModalOpen}
            />
        </div>
    );
}
