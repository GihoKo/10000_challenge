import NagativeButton from "@/components/button/NagativeButton";
import { ChallengeDeleteModalProps } from "./DeleteChallengeModal.type";
import DangerousButton from "@/components/button/DangerousButton";

export default function DeleteChallengeModal({
    onClose,
    handleDeleteChallenge,
}: ChallengeDeleteModalProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="w-full flex flex-col gap-2 p-4 bg-white rounded-md mx-6">
                <span>챌린지 삭제 하시겠습니까?</span>

                <div className="flex justify-end gap-2">
                    <NagativeButton
                        type="button"
                        text="취소"
                        rounded="rounded-md"
                        px="px-2"
                        py="py-1"
                        width="w-auto"
                        onClick={onClose}
                    />
                    <DangerousButton
                        type="button"
                        text="삭제"
                        rounded="rounded-md"
                        px="px-2"
                        py="py-1"
                        width="w-auto"
                        onClick={handleDeleteChallenge}
                    />
                </div>
            </div>
        </div>
    );
}
