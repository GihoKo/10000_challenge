export interface ExpensesByCategory {
    name: string;
    amount: number;
    fill: "#3B82F6" | "#F59E0B" | "#10B981" | "#EF4444";
}

export interface DailyExpense {
    date: string;
    amount: number;
}
