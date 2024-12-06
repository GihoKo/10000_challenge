import { getExpense, updateExpense } from "@/apis/services/expense";
import { getExpenseCategoryByUserId } from "@/apis/services/expenseCategory";
import { ExpenseCategory } from "@/app/home/setting/expenseCategory/_components/Main/Main.type";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

export default function useMain() {
    const { expenseId } = useParams();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset, // reset은 전체를 초기화, setValue는 일부를 초기화
        formState: { errors },
        control,
    } = useForm({
        mode: "onBlur",
    });

    //expenseCategories, handleSelectChange
    const [expenseCategories, setExpenseCategories] = useState<
        ExpenseCategory[]
    >([]);

    const [currentExpenseCategoryId, setCurrentExpenseCategoryId] = useState<
        number | null
    >(null);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentExpenseCategoryId(Number(e.target.value));
    };

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

        updateExpense(expenseId as string, newExpense)
            .then(() => {
                router.push("/home/expenses");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getExpense({ expenseId }).then((expense) => {
            reset(expense);
        });

        getExpenseCategoryByUserId({
            userId: process.env.NEXT_PUBLIC_USER_ID as string,
        })
            .then((response) => {
                setExpenseCategories(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [expenseId, reset]);

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
