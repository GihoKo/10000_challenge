import { useRouter } from "next/navigation";
import { useState } from "react";
import formatDate from "@/utils/formatDate";
import supabaseClient from "@/supabase/supabaseClient";
import { Values } from "./Main.type";

export default function useMain() {
    const router = useRouter();

    const [values, setValues] = useState<Values>({
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

    return { values, handleInputChange, handleCategoryChange, handleSubmit };
}
