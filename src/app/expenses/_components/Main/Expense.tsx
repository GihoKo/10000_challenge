interface ExpenseProps {
    expense: {
        id: number;
        category: string;
        description: string;
        amount: string;
    };
}

export default function Expense({ expense }: ExpenseProps) {
    return (
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
            <span className="text-sm font-medium">{expense.amount}</span>
        </li>
    );
}
