import MONTH_NAMES from "@/constants/MONTH_NAMES";
import { ExpenseProps } from "./Expense.type";

export default function Expense({ expense, onClick }: ExpenseProps) {
    const newDate = new Date(expense.created_at);

    const formattedDate = `${
        MONTH_NAMES[newDate.getUTCMonth()]
    } ${newDate.getUTCDate()}`;

    const handleClick = () => {
        onClick(expense.id);
    };

    return (
        <li
            data-id={expense.id}
            key={expense.id}
            className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg"
            onClick={handleClick}
        >
            <div className="flex flex-col">
                <span className="text-sm font-medium">
                    {expense.description}
                </span>
                <span className="text-xs text-gray-500">
                    {expense.category}
                </span>
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-medium">{expense.amount}</span>
                <span className="text-xs text-gray-500">{formattedDate}</span>
            </div>
        </li>
    );
}
