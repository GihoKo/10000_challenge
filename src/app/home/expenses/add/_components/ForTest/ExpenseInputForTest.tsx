import useRerenderCountStore from "@/stores/rerenderCountStore";

interface ExpenseInputForTestProps {
    name: "description" | "amount" | "date";
    type: "text" | "number" | "date";
    formValues: {
        category_name: string;
        description: string;
        amount: number;
        date: string;
    };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ExpenseInputForTest({
    name,
    type,
    formValues,
    handleInputChange,
}: ExpenseInputForTestProps) {
    const incrementRerenderCount =
        useRerenderCountStore.getState().incrementRerenderCount;
    incrementRerenderCount();

    return (
        <input
            name={name}
            type={type}
            value={formValues.description}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md w-full px-3 py-2 text-sm focus:border-blue-600"
        />
    );
}
