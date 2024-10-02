import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { CategoryPieChartProps } from "./CategoryPieChart.type";

export default function CategoryPieChart({
    expensesByCategory,
}: CategoryPieChartProps) {
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
