export interface ExpensesByCategory {
    name: "식비" | "교통비" | "문화생활" | "기타";
    amount: number;
    fill: "#3B82F6" | "#F59E0B" | "#10B981" | "#EF4444";
}

export interface DailyExpense {
    date: string;
    amount: number;
}
