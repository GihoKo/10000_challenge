import { useRouter } from "next/navigation";
import { useState } from "react";
import formatDate from "@/utils/formatDate";
import supabaseClient from "@/supabase/supabaseClient";
import { Values } from "./Main.type";
import { createExpense } from "@/apis/services/expense";

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

        createExpense({
            values,
        })
            .then((expense) => {
                router.push("/expenses");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return { values, handleInputChange, handleCategoryChange, handleSubmit };
}
