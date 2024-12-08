import { DailyExpense } from "@/types/chart";
import { useCallback, useEffect, useState } from "react";
import { UseDailyExpenseBarChartProps } from "./DailyExpenseBarChart.type";

export default function useDailyExpenseBarChart({
    expenses,
}: UseDailyExpenseBarChartProps) {
    const [dailyExpenses, setDailyExpenses] = useState<DailyExpense[]>([]);

    const groupExpensesByDate = useCallback(() => {
        if (!expenses) return [];

        const groupedExpenses: DailyExpense[] = [];

        expenses.forEach((expense) => {
            const date = expense.date;
            const amount = expense.amount;

            // 만약 groupedExpenses에 date가 존재하면 해당 객체에 amount를 더하기
            if (groupedExpenses.some((item) => item.date === date)) {
                const index = groupedExpenses.findIndex(
                    (item) => item.date === date
                );
                groupedExpenses[index].amount += amount;
            } else {
                // 만약 groupedExpenses에 date가 없다면 해당 객체를 추가하기
                groupedExpenses.push({ date, amount });
            }
        });

        return groupedExpenses;
    }, [expenses]);

    useEffect(() => {
        setDailyExpenses(groupExpensesByDate());
    }, [expenses, groupExpensesByDate]);

    return {
        dailyExpenses,
    };
}
