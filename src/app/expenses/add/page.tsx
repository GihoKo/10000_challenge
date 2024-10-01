"use client";

import ConfirmButton from "@/components/button/ConfirmButton";
import Input from "@/components/input/input";
import Label from "@/components/label/label";

import { useState } from "react";
import supabaseClient from "@/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import Header from "../_components/Header/Header";
import ExpenseCategorySelect from "@/components/input/ExpenseCategorySelect";

export interface AddExpenseValues {
    category: string;
    description: string;
    amount: string;
}

export default function Add() {
    const [values, setValues] = useState<AddExpenseValues>({
        category: "",
        description: "",
        amount: "",
    });

    const router = useRouter();

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
            .then((response) => {
                if (response.status === 201) {
                    router.push("/expenses");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const createExpense = async () => {
        const data = {
            category: values.category,
            description: values.description,
            amount: values.amount,
            user_id: process.env.NEXT_PUBLIC_USER_ID,
        };

        const response = await supabaseClient.from("expense").insert(data);

        if (response.error) {
            throw new Error(response.error.message);
        }

        return response;
    };

    return (
        <div>
            <Header />
            <div>새로운 지출을 추가할께요.</div>
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

                <div className="mt-10">
                    <ConfirmButton type="submit" text="추가" />
                </div>
            </form>
        </div>
    );
}
