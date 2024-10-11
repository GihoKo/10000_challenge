"use client";

import useExpenseContainer from "./ExpenseContainer.hook";
import Expense from "./Expense";
import { ExpenseData } from "@/types/expense";

// 서버 클라이언트로 사용해 stream으로 후순위로 렌더링
// 1. 모달 삭제해서 expense edit 페이지 생성할 것
// 2. hook을 사용하지 않고, 비동기 데이터를 관리할 것
// 3. zustand를 여기서 사용하지 않을 것
export default function ExpenseContainer() {
    const { expenses } = useExpenseContainer();

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
