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

export interface ChallengeMock {
    id: number;
    name: string;
    totalRemainingMoney: number;
    progressDays: number;
    totalDays: number;
}

export const CHALLENGE_MOCKDATA: ChallengeMock[] = [
    {
        id: 1,
        name: "만원 챌린지",
        totalRemainingMoney: +13000,
        progressDays: 7,
        totalDays: 30,
    },
    {
        id: 2,
        name: "오천원 챌린지",
        totalRemainingMoney: -7000,
        progressDays: 12,
        totalDays: 30,
    },
    {
        id: 3,
        name: "일주일 챌린지",
        totalRemainingMoney: +2000,
        progressDays: 2,
        totalDays: 7,
    },
];

interface ExpenseCategoryMock {
    id: number;
    name: string;
}

export const expenseCategoryMocks: ExpenseCategoryMock[] = [
    {
        id: 1,
        name: "식비",
    },
    {
        id: 2,
        name: "교통비",
    },
    {
        id: 3,
        name: "문화 생활",
    },
    {
        id: 4,
        name: "기타",
    },
];
