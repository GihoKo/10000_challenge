import formatDate from "@/utils/formatDate";
import { create } from "zustand";

interface DateStore {
    date: string;
    setDate: (date: string) => void;
}

export const useDateStore = create<DateStore>((set) => ({
    // "YYYY-MM-DD" 형식으로 저장
    date: "YYYY-MM-DD",
    setDate: (date: string) => {
        return set({ date: formatDate(date) });
    },
}));
