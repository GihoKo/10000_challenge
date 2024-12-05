"use client";

import useModalStore from "@/stores/modalStore";
import AnimatedModal from "../animated/AnimatedModal";

export default function Modal() {
    const { isModalOpen, content } = useModalStore();

    if (!isModalOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-9998 flex justify-center items-center bg-black bg-opacity-30">
            <AnimatedModal>
                <div className="bg-gray-50 rounded-lg p-4 w-full min-w-[300px]">
                    {content}
                </div>
            </AnimatedModal>
        </div>
    );
}
