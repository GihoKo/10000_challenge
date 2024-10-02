import { ChallengeResponse } from "@/types/challenge";
import { DailyExpense } from "@/types/chart";
import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { DailyExpenseBarChartProps } from "./DailyExpenseBarChart.type";

export default function DailyExpenseBarChart({
    dailyExpenses,
    challenge,
}: DailyExpenseBarChartProps) {
    if (!challenge) return null;

    return (
        <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={dailyExpenses}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend
                    payload={[
                        {
                            value: "지출",
                            type: "rect",
                            color: "#3B82F6",
                        },
                        {
                            value: "목표 지출",
                            type: "line",
                            color: "red",
                        },
                    ]}
                />
                <CartesianGrid stroke="#f5f5f5" />
                <Bar dataKey="amount" name="지출" barSize={20} fill="#3B82F6" />
                <ReferenceLine
                    y={challenge?.daily_saving}
                    name="목표 지출"
                    stroke="red"
                />
            </ComposedChart>
        </ResponsiveContainer>
    );
}
