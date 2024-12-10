"use client";

import AddExpenseCategorySection from "../AddExpenseCategorySection/AddExpenseCategorySection";
import ExpenseCategoryContainer from "../ExpenseCategoryContainer/ExpenseCategoryContainer";

import useMain from "./Main.hook";

export default function Main() {
    const { expenseCategories, isError, expenseCategoriesDispatch } = useMain();

    if (isError) return <div>오류가 발생했습니다.</div>;

    return (
        <main className="flex flex-col gap-4">
            <AddExpenseCategorySection
                expenseCategoriesDispatch={expenseCategoriesDispatch}
            />

            <ExpenseCategoryContainer
                expenseCategories={expenseCategories}
                expenseCategoriesDispatch={expenseCategoriesDispatch}
            />
        </main>
    );
}
