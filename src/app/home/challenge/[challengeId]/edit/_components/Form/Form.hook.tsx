import { getChallengeById, updateChallenge } from "@/apis/services/challenge";
import {
    addExpenseCategoriesToChallenge,
    deleteExpenseCategoriesToChallenge,
    getExpenseCategoryByChallengeId,
    getExpenseCategoryByUserId,
} from "@/apis/services/expenseCategory";
import { ExpenseCategory } from "@/app/home/setting/expenseCategory/_components/Main/Main.type";
import { useParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { FieldValues, useForm as useFormHook } from "react-hook-form";
import { UpdatedChallenge } from "./Form.type";

export default function useForm() {
    const router = useRouter();
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

    const initialExpenseCategoriesOfChallenge = useRef<ExpenseCategory[]>([]);

    const [expenseCategoriesOfChallenge, setExpenseCategoriesOfChallenge] =
        useState<ExpenseCategory[]>([]);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptionId = Number(e.target.value);

        // 만약 이미 있는 카테고리라면 리턴한다.
        if (
            expenseCategoriesOfChallenge.some(
                (category) => category.id === selectedOptionId
            )
        ) {
            return;
        }

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
        const expenseCategoryTag = (
            e.target as HTMLElement
        ).closest<HTMLButtonElement>("li");

        console.log(expenseCategoryTag);

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

        const deletedExpenseCategoriesOfChallenge =
            initialExpenseCategoriesOfChallenge.current.filter(
                (category) => !expenseCategoriesOfChallenge.includes(category)
            );

        const addedExpenseCategoriesOfChallenge =
            expenseCategoriesOfChallenge.filter(
                (category) =>
                    !initialExpenseCategoriesOfChallenge.current.includes(
                        category
                    )
            );

        updateChallengeWithAddAndDeleteCategory(
            challenge,
            addedExpenseCategoriesOfChallenge,
            deletedExpenseCategoriesOfChallenge
        );
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
                    initialExpenseCategoriesOfChallenge.current =
                        expenseCategories;
                })
                .catch((error) => {
                    console.error(error);
                }),
        ]);
    }, [challengeId, reset]);

    const updateChallengeWithAddAndDeleteCategory = useCallback(
        (
            challenge: UpdatedChallenge,
            addedExpenseCategoriesOfChallenge: ExpenseCategory[],
            deletedExpenseCategoriesOfChallenge: ExpenseCategory[]
        ) => {
            Promise.all([
                updateChallenge({
                    challengeId: challengeId,
                    updatedChallenge: challenge,
                })
                    .then(() => {
                        router.push(`/home/challenge/${challengeId}`);
                    })
                    .catch((error) => {
                        console.error(error);
                    }),
                addExpenseCategoriesToChallenge({
                    data: {
                        challengeId: challengeId,
                        addedExpenseCategoriesOfChallenge,
                        userId: process.env.NEXT_PUBLIC_USER_ID as string,
                    },
                }),
                deleteExpenseCategoriesToChallenge({
                    data: {
                        challengeId: challengeId,
                        deletedExpenseCategoriesOfChallenge,
                    },
                }),
            ]);
        },
        [challengeId, router]
    );

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
