"use client";

import useDate from "./Date.hook";

export default function Date() {
    const { date, formatDate, handleDateChange } = useDate();

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
