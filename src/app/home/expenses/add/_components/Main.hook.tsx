import { createExpense } from "@/apis/services/expense";
import { getExpenseCategoryByUserId } from "@/apis/services/expenseCategory";
import { ExpenseCategory } from "@/app/home/setting/expenseCategory/_components/Main/Main.type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

export default function useMain() {
    const router = useRouter();

    const [expenseCategories, setExpenseCategories] = useState<
        ExpenseCategory[]
    >([]);

    const [currentExpenseCategoryId, setCurrentExpenseCategoryId] = useState<
        number | null
    >(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data: FieldValues) => {
        if (!currentExpenseCategoryId) return;

        const category = expenseCategories.find(
            (category) => category.id === currentExpenseCategoryId
        );

        if (!category) return;

        const newExpense = {
            category_name: category.name,
            category_id: currentExpenseCategoryId,
            description: data.description,
            amount: data.amount,
            date: data.date,
        };

        // const arr = Array(450).fill(0);

        // const apiCalls = arr.map(() => {
        //     return createExpense({ data: newExpense });
        // });

        // Promise.all(apiCalls);
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentExpenseCategoryId(Number(e.target.value));
    };

    useEffect(() => {
        getExpenseCategoryByUserId({
            userId: process.env.NEXT_PUBLIC_USER_ID as string,
        })
            .then((response) => {
                setExpenseCategories(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return {
        register,
        handleSubmit,
        onSubmit,
        handleSelectChange,
        errors,
        control,
        expenseCategories,
    };
}
