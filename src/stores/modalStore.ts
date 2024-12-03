import { create } from "zustand";

interface ModalStore {
    isModalOpen: boolean;
    content: React.ReactNode | null;
    setIsModalOpen: (content: React.ReactNode) => void;
    closeModal: () => void;
}

const useModalStore = create<ModalStore>((set) => ({
    isModalOpen: false,
    content: null,
    setIsModalOpen: (content) => {
        return set({ isModalOpen: true, content });
    },
    closeModal: () => {
        return set({ isModalOpen: false, content: null });
    },
}));

export default useModalStore;
