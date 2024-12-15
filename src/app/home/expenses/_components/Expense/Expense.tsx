// "use client";

import MONTH_NAMES from "@/constants/MONTH_NAMES";
import { ExpenseProps } from "./Expense.type";
import Link from "next/link";

export default function Expense({ expense }: ExpenseProps) {
    const newDate = new Date(expense.date);

    const formattedDate = `${
        MONTH_NAMES[newDate.getUTCMonth()]
    } ${newDate.getUTCDate()}`;

    return (
        <li data-id={expense.id} key={expense.id}>
            <Link
                href={`/home/expenses/edit/${expense.id}`}
                className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg"
            >
                <div className="flex flex-col">
                    <span className="text-sm font-medium">
                        {expense.description}
                    </span>
                    <span className="text-xs text-gray-500">
                        {expense.category_name}
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-medium">
                        {expense.amount}
                    </span>
                    <span className="text-xs text-gray-500 text-end">
                        {formattedDate}
                    </span>
                </div>
            </Link>
        </li>
    );
}
