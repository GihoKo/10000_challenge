"use client";

import NavigateButtonButton from "@/components/button/NavigateButtonButton";
import { EXPENSE_MOCKDATA, ExpenseMockData } from "@/mocks";

export default function Transactions() {
    return (
        <div className="flex flex-col py-8 px-4">
            <h2 className="text-2xl font-bold mb-3.5">오늘의 지출</h2>
            <div className="text-sm mb-10">
                오늘은
                <span className="text-xl font-medium mx-1">
                    2024월 09월 05일
                </span>
                이에요.
            </div>
            <div>
                <h3 className="text-xl mb-2">오늘 하루는 어땠나요?</h3>
                <ul className="flex flex-col gap-2">
                    {EXPENSE_MOCKDATA.map((expense: ExpenseMockData, index) => (
                        <li
                            key={expense.id}
                            className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-md"
                        >
                            <div className="flex flex-col">
                                <span className="text-sm font-medium">
                                    {expense.description}
                                </span>
                                <span className="text-xs text-gray-500">
                                    {expense.category}
                                </span>
                            </div>
                            <span className="text-sm font-medium">
                                {expense.amount}
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-end mt-8">
                    <NavigateButtonButton
                        type="button"
                        width="w-auto"
                        text="추가"
                    />
                </div>
            </div>
        </div>
    );
}
