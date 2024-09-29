export interface ExpenseResponse {
    id: string;
    created_at: string;
    category: string;
    description: string;
    amount: number;
    user_id: string;
}
