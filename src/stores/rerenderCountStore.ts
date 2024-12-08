import { create } from "zustand";

interface RerenderCountStore {
    rerenderCount: number;
    incrementRerenderCount: () => void;
}

const useRerenderCountStore = create<RerenderCountStore>((set) => ({
    rerenderCount: 0,
    incrementRerenderCount: () => {
        set((state) => ({
            rerenderCount: state.rerenderCount + 1,
        }));
    },
}));

export default useRerenderCountStore;
