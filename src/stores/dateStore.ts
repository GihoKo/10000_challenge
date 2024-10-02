import formatDate from "@/utils/formatDate";
import { create } from "zustand";

interface DateStore {
    date: string;
    setDate: (date: string) => void;
}

const Today = formatDate(new Date().toLocaleDateString());

export const useDateStore = create<DateStore>((set) => ({
    // "YYYY-MM-DD" 형식으로 저장
    date: Today,
    setDate: (date: string) => {
        return set({ date: formatDate(date) });
    },
}));
