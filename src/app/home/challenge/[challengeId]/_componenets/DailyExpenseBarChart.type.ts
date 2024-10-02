import { ChallengeResponse } from "@/types/challenge";
import { DailyExpense } from "@/types/chart";

export interface DailyExpenseBarChartProps {
    dailyExpenses: DailyExpense[];
    challenge: ChallengeResponse | undefined;
}
