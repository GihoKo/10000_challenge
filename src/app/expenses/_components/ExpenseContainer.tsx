import Expense from "./Expense";
import { ExpenseData } from "@/types/expense";
import { getExpensesByDate } from "@/apis/services/expense";
import { Suspense } from "react";

// 서버 클라이언트로 사용해 stream으로 후순위로 렌더링
// 1. 모달 삭제해서 expense edit 페이지 생성할 것
// 2. hook을 사용하지 않고, 비동기 데이터를 관리할 것
// 3. zustand를 여기서 사용하지 않을 것

export async function ExpenseContainerServerComponent() {
    const expenses = await getExpensesByDate();

    return (
        <div>
            <ul className="flex flex-col gap-2">
                {expenses.map((expense: ExpenseData) => (
                    <Expense key={expense.id} expense={expense} />
                ))}
            </ul>
        </div>
    );
}

export default async function ExpenseContainer() {
    return (
        <Suspense fallback={<div>데이터를 불러오는 중 입니다...</div>}>
            <ExpenseContainerServerComponent />
        </Suspense>
    );
}
