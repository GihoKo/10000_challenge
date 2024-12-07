import { getChallengeById } from "@/apis/services/challenge";
import {
    getExpenseCategoryByChallengeId,
    getExpenseCategoryByUserId,
} from "@/apis/services/expenseCategory";
import { ExpenseCategory } from "@/app/home/setting/expenseCategory/_components/Main/Main.type";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, useForm as useFormHook } from "react-hook-form";

export default function useForm() {
    const { challengeId } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        reset,
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

    const handleExpenseCategoryTagClick = (
        e: React.MouseEvent<HTMLUListElement, MouseEvent>
    ) => {
        const expenseCategorytagId = Number(
            (e.target as HTMLElement).closest<HTMLButtonElement>("li")?.dataset
                .id
        );

        setExpenseCategoriesOfChallenge((prevItems) =>
            prevItems.filter((item) => item.id !== expenseCategorytagId)
        );
    };

    const onSubmit = (data: FieldValues) => {
        const challenge = {
            name: data.name,
            resolution: data.resolution,
            daily_saving: data.dailySaving,
            goal_date: data.goalDate,
            user_id: process.env.NEXT_PUBLIC_USER_ID as string,
        };

        // EditChallenge()
    };

    const getAllData = useCallback(() => {
        // Promise.all vs Promise.allsettled -> 모든 데이터가 필수적이므로 Promise.all을 사용한다
        Promise.all([
            getChallengeById({
                challengeId: challengeId,
            })
                .then((challenge) => {
                    reset({
                        name: challenge.name,
                        resolution: challenge.resolution,
                        dailySaving: challenge.daily_saving,
                        goalDate: challenge.goal_date,
                    });
                })
                .catch((error) => {
                    console.error(error);
                }),

            getExpenseCategoryByUserId({
                userId: process.env.NEXT_PUBLIC_USER_ID as string,
            })
                .then((response) => {
                    setExpenseCategories(response);
                })
                .catch((error) => {
                    console.error(error);
                }),

            getExpenseCategoryByChallengeId({
                challengeId: challengeId as string,
            })
                .then((expenseCategories) => {
                    setExpenseCategoriesOfChallenge(expenseCategories);
                })
                .catch((error) => {
                    console.error(error);
                }),
        ]);
    }, [challengeId, reset]);

    useEffect(() => {
        getAllData();
    }, [challengeId, getAllData]);

    return {
        register,
        handleSubmit,
        onSubmit,
        handleSelectChange,
        handleExpenseCategoryTagClick,
        errors,
        control,
        expenseCategories,
        expenseCategoriesOfChallenge,
    };
}
