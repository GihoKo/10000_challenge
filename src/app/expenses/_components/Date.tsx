"use client";

import { useDateStore } from "@/stores/dateStore";

export default function Date() {
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

    return (
        <div className="text-sm mb-10">
            오늘은
            <span className="text-xl font-medium mx-1 text-blue-700">
                {formatDate(date)}
                {/* input의 달력 이미지만 남기고 글자는 지우기 */}
                <input
                    type="date"
                    onChange={handleDateChange}
                    value={date}
                    className="text-transparent w-6"
                />
            </span>
            이에요.
        </div>
    );
}
