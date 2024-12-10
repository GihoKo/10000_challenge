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

        createExpense({ data: newExpense })
            .then(() => {
                router.push("/home/expenses");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentExpenseCategoryId(Number(e.target.value));
    };

    useEffect(() => {
        getExpenseCategoryByUserId()
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
