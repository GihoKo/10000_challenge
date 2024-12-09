import useRerenderCountStore from "@/stores/rerenderCountStore";
import { memo } from "react";

interface ExpenseInputForTestProps {
    name: "description" | "amount" | "date";
    type: "text" | "number" | "date";
    value: string | number;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ExpenseInputForTest({
    name,
    type,
    value,
    handleInputChange,
}: ExpenseInputForTestProps) {
    const incrementRerenderCount =
        useRerenderCountStore.getState().incrementRerenderCount;

    incrementRerenderCount();

    return (
        <input
            name={name}
            type={type}
            value={value}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md w-full px-3 py-2 text-sm focus:border-blue-600"
        />
    );
}

const memoizedExpenseInputForTest = memo(ExpenseInputForTest);

export default memoizedExpenseInputForTest;
