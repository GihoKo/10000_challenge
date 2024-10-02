"use client";

import ConfirmButton from "@/components/button/ConfirmButton";
import Input from "@/components/input/input";
import Label from "@/components/label/label";

import { useState } from "react";
import supabaseClient from "@/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import ExpenseCategorySelect from "@/components/input/ExpenseCategorySelect";
import PageContentHeader from "@/components/Header/PageContentHeader";
import formatDate from "@/utils/formatDate";

export interface AddExpenseValues {
    category: string;
    description: string;
    amount: number;
    date: string;
}

export default function Add() {
    const router = useRouter();

    const [values, setValues] = useState<AddExpenseValues>({
        category: "",
        description: "",
        amount: 0,
        date: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        createExpense()
            .then((expense) => {
                console.log(expense);
                router.push("/expenses");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const createExpense = async () => {
        const expense = {
            category: values.category,
            description: values.description,
            amount: values.amount,
            user_id: process.env.NEXT_PUBLIC_USER_ID,
            date: formatDate(values.date),
        };

        const { data, error } = await supabaseClient
            .from("expense")
            .insert(expense);

        if (error) {
            throw new Error(error.message);
        }

        return data;
    };

    return (
        <div>
            <PageContentHeader text="지출 추가하기" />

            <form onSubmit={handleSubmit}>
                <div className="mt-2">
                    <ExpenseCategorySelect
                        value={values.category}
                        onChange={handleCategoryChange}
                    />
                </div>

                <div className="mt-2">
                    <Label
                        htmlFor="description"
                        text="지출 내용을 입력해주세요."
                    >
                        <Input
                            id="description"
                            name="description"
                            type="text"
                            placeholder="지출 내용을 입력해주세요"
                            value={values.description}
                            onChange={handleInputChange}
                        />
                    </Label>
                </div>

                <div className="mt-2">
                    <Label htmlFor="amount" text="지출 금액을 입력해주세요.">
                        <Input
                            id="amount"
                            name="amount"
                            type="text"
                            placeholder="지출 금액을 입력해주세요"
                            value={values.amount}
                            onChange={handleInputChange}
                        />
                    </Label>
                </div>

                <div className="mt-2">
                    <Label htmlFor="date" text="지출 날짜를 입력해주세요.">
                        <Input
                            id="date"
                            name="date"
                            type="date"
                            placeholder="지출 날짜를 입력해주세요"
                            value={values.date}
                            onChange={handleInputChange}
                        />
                    </Label>
                </div>

                <div className="mt-10">
                    <ConfirmButton type="submit" text="추가" />
                </div>
            </form>
        </div>
    );
}
