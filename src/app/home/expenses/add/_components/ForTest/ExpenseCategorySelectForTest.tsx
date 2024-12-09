import { ExpenseCategory } from "@/app/home/setting/expenseCategory/_components/Main/Main.type";
import Image from "next/image";
import dropDownArrow from "@/images/svg/dropdown-arrow.svg";
import useRerenderCountStore from "@/stores/rerenderCountStore";
import { memo, useMemo } from "react";

interface ExpenseCategorySelectForTestProps {
    value: string;
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    expenseCategories: ExpenseCategory[];
}

function ExpenseCategorySelectForTest({
    value,
    handleSelectChange,
    expenseCategories,
}: ExpenseCategorySelectForTestProps) {
    const incrementRerenderCount =
        useRerenderCountStore.getState().incrementRerenderCount;

    incrementRerenderCount();

    const memoizedDropDownArrow = useMemo(
        () => (
            <Image
                className="absolute right-1.5 top-[30px]"
                src={dropDownArrow}
                alt="드롭다운 화살표 이미지"
                width={32}
                height={32}
            />
        ),
        []
    );

    return (
        <div>
            <select
                value={value}
                onChange={handleSelectChange}
                className={`w-full p-2 border-2 rounded-md text-sm focus:outline-none appearance-none focus:border-blue-500 transition-all duration-300`}
                defaultValue={""}
            >
                <option value="" disabled>
                    지출 카테고리를 선택해주세요
                </option>
                {expenseCategories.map((category) => {
                    return (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    );
                })}
            </select>
            {memoizedDropDownArrow}
        </div>
    );
}

const memoizedExpenseCategorySelectForTest = memo(ExpenseCategorySelectForTest);

export default memoizedExpenseCategorySelectForTest;
