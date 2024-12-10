import { addChallenge } from "@/apis/services/challenge";
import { getExpenseCategoryByUserId } from "@/apis/services/expenseCategory";
import { ExpenseCategory } from "@/app/home/setting/expenseCategory/_components/Main/Main.type";
import { useUser } from "@/contexts/UserContext";
import createStartDate from "@/utils/createStartDate";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, useForm as useFormHook } from "react-hook-form";

export default function useForm() {
    const router = useRouter();
    const { user } = useUser();

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
            start_date: createStartDate(),
            goal_date: data.goalDate,
            user_id: user?.id,
        };

        addChallenge({
            challenge: challenge,
            expenseCategoriesOfChallenge: expenseCategoriesOfChallenge,
            userId: user?.id,
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
            userId: user?.id,
        })
            .then((response) => {
                console.log(response);
                setExpenseCategories(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [user]);

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
