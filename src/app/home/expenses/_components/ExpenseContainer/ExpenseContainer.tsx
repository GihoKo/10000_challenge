// "use client";

import Expense from "../Expense/Expense";
import { ExpenseData } from "@/types/expense";
import { getExpensesByDate } from "@/apis/services/expense";
import { useDateStore } from "@/stores/dateStore";
// import { useEffect, useState } from "react";

// SSR + streaming을 이용하기
export default async function ExpenseContainer() {
    const { date } = useDateStore.getState();

    const expenses = await getExpensesByDate({ date })
        .then((response) => {
            if (response) {
                return response;
            }
        })
        .catch((error) => {
            console.error(error);
        });

    if (!expenses) return <div>데이터를 가져오지 못했습니다.</div>;

    return (
        <ul className="flex flex-col gap-2">
            {expenses.map((expense: ExpenseData) => (
                <Expense key={expense.id} expense={expense} />
            ))}
        </ul>
    );
}

// CSR
// export default function ExpenseContainer() {
//     const [expenses, setExpenses] = useState<ExpenseData[]>([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isError, setIsError] = useState(false);
//     const { date } = useDateStore();

//     useEffect(() => {
//         setIsLoading(true);

//         getExpensesByDate({ date })
//             .then((response) => {
//                 if (response) {
//                     setExpenses(response);
//                 }
//             })
//             .catch(() => {
//                 setIsError(true);
//             })
//             .finally(() => {
//                 setIsLoading(false);
//             });
//     }, [date]);

//     if (isLoading) {
//         return <div>데이터를 불러오는 중 입니다.</div>;
//     }

//     if (isError) {
//         return <div>데이터를 가져오지 못했습니다.</div>;
//     }

//     return (
//         <ul className="flex flex-col gap-2">
//             {expenses.map((expense: ExpenseData) => (
//                 <Expense key={expense.id} expense={expense} />
//             ))}
//         </ul>
//     );
// }
