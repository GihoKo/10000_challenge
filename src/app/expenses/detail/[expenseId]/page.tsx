"use client";

import supabaseClient from "@/supabase/supabaseClient";
import { ExpenseData } from "@/types/expense";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Detail() {
    const { expenseId } = useParams();

    const [expense, setExpense] = useState<ExpenseData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getExpense = useCallback(async () => {
        const { data: expense, error } = await supabaseClient
            .from("expense")
            .select("*")
            .eq("id", expenseId);

        if (error) {
            throw new Error(error.message);
        }

        return expense[0];
    }, [expenseId]);

    useEffect(() => {
        setIsLoading(true);

        getExpense()
            .then((expense) => {
                setExpense(expense);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [expenseId, getExpense]);

    // 수정 버튼과 삭제 버튼추가
    // 수정 버튼 클릭시 Form 형태로 변경 및 확인, 취소 버튼 추가
    // 삭제 버튼 클릭시 삭제 시도
    // 변경, 확인, 취소, 삭제 버튼 클릭시 모달로 확인 시도

    if (isLoading) {
        return <div>데이터를 불러오는 중 입니다...</div>;
    }

    if (error) {
        return <div>데이터 가져오기를 실패했습니다. 재시도해주세요.</div>;
    }

    return (
        <div>
            <div>지출 상세 정보</div>
            <div>{expense?.description}</div>
            <div>{expense?.amount}</div>
        </div>
    );
}
