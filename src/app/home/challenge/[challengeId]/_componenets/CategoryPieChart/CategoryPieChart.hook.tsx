import { ExpensesByCategory } from "@/types/chart";
import { useCallback, useEffect, useState } from "react";
import { UseCategoryPieChartProps } from "./CategoryPieChart.type";

export default function useCategoryPieChart({
    expenses,
}: UseCategoryPieChartProps) {
    const [expensesByCategory, setExpensesByCategory] = useState<
        ExpensesByCategory[]
    >([
        { name: "식비", amount: 0, fill: "#3B82F6" },
        { name: "교통비", amount: 0, fill: "#F59E0B" },
        { name: "문화생활", amount: 0, fill: "#10B981" },
        { name: "기타", amount: 0, fill: "#EF4444" },
    ]);

    const groupExpensesByCategory = useCallback(() => {
        if (!expenses) return [];

        const groupedExpenses: ExpensesByCategory[] = [...expensesByCategory];

        expenses.forEach((expense) => {
            const category = expense.category_name;
            const amount = expense.amount;

            // 해당 카테고리에 amount를 더하기
            const index = groupedExpenses.findIndex(
                (expense) => expense.name === category
            );
            groupedExpenses[index].amount += amount;
        });

        return groupedExpenses;
    }, [expenses, expensesByCategory]);

    useEffect(() => {
        setExpensesByCategory(groupExpensesByCategory());
    }, [expenses, groupExpensesByCategory]);

    return { expensesByCategory };
}
