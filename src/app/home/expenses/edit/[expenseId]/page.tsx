"use client";

import ConfirmButton from "@/components/button/ConfirmButton";
import PageContentHeader from "@/components/Header/PageContentHeader";
import supabaseClient from "@/supabase/client";
import { ExpenseData } from "@/types/expense";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Edit() {
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

    if (isLoading) {
        return <div>데이터를 불러오는 중 입니다...</div>;
    }

    if (error) {
        return <div>데이터 가져오기를 실패했습니다. 재시도해주세요.</div>;
    }

    return (
        <div>
            <PageContentHeader text="지출 수정" />

            <div className="flex justify-end mt-8">
                <ConfirmButton type="button" width="w-auto" />
            </div>
        </div>
    );
}
