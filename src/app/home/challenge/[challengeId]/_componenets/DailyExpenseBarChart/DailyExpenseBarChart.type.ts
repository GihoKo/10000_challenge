import { ChallengeResponse } from "@/types/challenge";
import { ExpenseData } from "@/types/expense";

export interface DailyExpenseBarChartProps {
    challenge: ChallengeResponse | undefined;
    expenses: ExpenseData[];
}

export interface UseDailyExpenseBarChartProps {
    expenses: ExpenseData[];
}
