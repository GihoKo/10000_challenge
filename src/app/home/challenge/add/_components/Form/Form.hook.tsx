import { addChallenge } from "@/apis/services/challenge";
import { getExpenseCategoryByUserId } from "@/apis/services/expenseCategory";
import { ExpenseCategory } from "@/app/home/setting/expenseCategory/_components/Main/Main.type";
import createStartDate from "@/utils/createStartDate";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, useForm as useFormHook } from "react-hook-form";

export default function useForm() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useFormHook({
        mode: "onBlur",
    });

    const [expenseCategories, setExpenseCategories] = useState<
        ExpenseCategory[]
    >([]);

    const [expenseCategoriesOfChallenge, setExpenseCategoriesOfChallenge] =
        useState<ExpenseCategory[]>([]);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptionId = Number(e.target.value);
        const selectedOption = expenseCategories.find(
            (category) => category.id === selectedOptionId
        );

        if (!selectedOption) return;
        setExpenseCategoriesOfChallenge([
            ...expenseCategoriesOfChallenge,
            selectedOption,
        ]);
    };

    const onSubmit = (data: FieldValues) => {
        const challenge = {
            name: data.name,
            resolution: data.resolution,
            daily_saving: data.dailySaving,
            start_date: createStartDate(),
            goal_date: data.goalDate,
            user_id: process.env.NEXT_PUBLIC_USER_ID as string,
        };

        addChallenge({
            challenge: challenge,
            expenseCategoriesOfChallenge: expenseCategoriesOfChallenge,
        })
            .then(() => {
                router.push("/home/challenge");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getExpenseCategoryByUserId({
            userId: process.env.NEXT_PUBLIC_USER_ID as string,
        })
            .then((response) => {
                console.log(response);
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
        expenseCategoriesOfChallenge,
    };
}
