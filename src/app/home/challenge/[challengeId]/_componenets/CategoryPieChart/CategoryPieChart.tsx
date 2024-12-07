import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { CategoryPieChartProps } from "./CategoryPieChart.type";
import useCategoryPieChart from "./CategoryPieChart.hook";

export default function CategoryPieChart({ expenses }: CategoryPieChartProps) {
    console.log(expenses);
    const { expensesByCategory } = useCategoryPieChart({ expenses });

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Legend />
                <Tooltip />
                <Pie
                    data={expensesByCategory}
                    dataKey="amount"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#3B82F6"
                    label
                />
            </PieChart>
        </ResponsiveContainer>
    );
}
