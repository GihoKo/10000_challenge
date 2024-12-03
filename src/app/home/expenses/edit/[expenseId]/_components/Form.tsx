"use client";

import { updateExpense } from "@/apis/services/expense";
import ConfirmButton from "@/components/button/ConfirmButton";
import ExpenseCategorySelect from "@/components/input/ExpenseCategorySelect";
import Input from "@/components/input/input";
import Label from "@/components/label/label";
import supabaseClient from "@/supabase/client";
import { ExpenseData } from "@/types/expense";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Form() {
    const { expenseId } = useParams();
    const router = useRouter();
    const [expense, setExpense] = useState<ExpenseData>({
        id: "",
        date: "",
        category: "",
        description: "",
        amount: 0,
        user_id: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpense({
            ...expense,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setExpense({
            ...expense,
            [e.target.name]: e.target.value,
        });
    };

    const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateExpense(expenseId as string, {
            description: expense.description,
            category: expense.category,
            amount: expense.amount,
        })
            .then(() => {
                router.push("/home/expenses");
            })
            .catch((error) => {
                console.error(error);
                setIsError(true);
            });
    };

    useEffect(() => {
        setIsLoading(true);

        getExpense()
            .then((expense) => {
                setExpense(expense);
            })
            .catch((error) => {
                console.error(error);
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [expenseId, getExpense]);

    if (isLoading) {
        return <div>데이터를 불러오는 중 입니다...</div>;
    }

    if (isError) {
        return <div>데이터 가져오기를 실패했습니다. 재시도해주세요.</div>;
    }

    return (
        <form onSubmit={handleEdit} className="flex flex-col gap-4">
            <Label text="설명" htmlFor="description">
                <Input
                    id="description"
                    name="description"
                    type="text"
                    placeholder="설명"
                    value={expense.description}
                    onChange={handleInputChange}
                />
            </Label>

            <ExpenseCategorySelect
                value={expense.category}
                onChange={handleSelectChange}
            />

            <Label text="금액" htmlFor="amount">
                <Input
                    id="amount"
                    name="amount"
                    type="text"
                    placeholder="금액"
                    value={expense.amount}
                    onChange={handleInputChange}
                />
            </Label>

            <ConfirmButton type="submit" text="수정" />
        </form>
    );
}
