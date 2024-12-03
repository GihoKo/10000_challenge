import { useDateStore } from "@/stores/dateStore";

export default function useDate() {
    const { date, setDate } = useDateStore();

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    };

    const formatDate = (date: string) => {
        // YYYY-MM-DD를 YYYY년 MM월 DD일으로 변경
        const year = date.slice(0, 4);
        const month = date.slice(5, 7);
        const day = date.slice(8, 10);

        return `${year}년 ${month}월 ${day}일`;
    };

    return { date, formatDate, setDate, handleDateChange };
}
