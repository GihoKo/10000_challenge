"use client";

import useModalStore from "@/stores/modalStore";

export default function Modal() {
    const { isModalOpen, content } = useModalStore();

    if (!isModalOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-9998 flex justify-center items-center bg-black bg-opacity-30">
            <div className="bg-white rounded-lg p-4 w-full max-w-[300px]">
                {content}
            </div>
        </div>
    );
}
