"use client";

import AddExpenseCategorySection from "./AddExpenseCategorySection";
import ExpenseCategoryContainer from "./ExpenseCategoryContainer";
import useMain from "./Main.hook";

export default function Main() {
    const { expenseCategories, expenseCategoriesDispatch, isLoading, isError } =
        useMain();

    if (isLoading) return <div>소비 카테고리 목록을 불러오는 중...</div>;

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
