"use client";

import { createContext, useContext, useState } from "react";

interface ModalContextProps {
    isModalOpen: boolean;
    content: React.ReactNode | null;
    setIsModalOpen: (isModalOpen: boolean) => void;
    setContent: (content: React.ReactNode) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({
    isModalOpen: false,
    content: null,
    setIsModalOpen: () => {},
    setContent: () => {},
    closeModal: () => {},
});

export const useModal = () => {
    return useContext(ModalContext);
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [content, setContent] = useState<React.ReactNode | null>(null);

    const closeModal = () => {
        setIsModalOpen(false);
        setContent(null);
    };

    return (
        <ModalContext.Provider
            value={{
                isModalOpen,
                content,
                setIsModalOpen,
                setContent,
                closeModal,
            }}
        >
            {children}
            {isModalOpen && (
                <div className="fixed inset-0 z-9998 flex justify-center items-center bg-black bg-opacity-30">
                    <div className="bg-gray-50 rounded-lg p-4 min-w-[300px]">
                        {content}
                    </div>
                </div>
            )}
        </ModalContext.Provider>
    );
};
