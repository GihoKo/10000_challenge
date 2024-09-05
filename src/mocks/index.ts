export interface ExpenseMockData {
    id: number;
    category: string;
    description: string;
    amount: string;
}

export const EXPENSE_MOCKDATA: ExpenseMockData[] = [
    {
        id: 0,
        category: "식비",
        description: "편의점 도시락",
        amount: "4,500원",
    },
    {
        id: 1,
        category: "식비",
        description: "김밥 한 줄",
        amount: "2,500원",
    },
    {
        id: 2,
        category: "식비",
        description: "라면 한 그릇",
        amount: "3,800원",
    },
    {
        id: 3,
        category: "식비",
        description: "햄버거 세트",
        amount: "5,900원",
    },
    {
        id: 4,
        category: "식비",
        description: "커피 한 잔",
        amount: "3,000원",
    },
];
