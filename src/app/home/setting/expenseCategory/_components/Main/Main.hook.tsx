import { getExpenseCategoryByUserId } from "@/apis/services/expenseCategory";
import expenseCategoryReducer from "@/reducers/expenseCategoryReducer";
import { useUserStore } from "@/stores/userStore";
import { useEffect, useReducer, useState } from "react";

export default function useMain() {
    const { user } = useUserStore();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [expenseCategories, expenseCategoriesDispatch] = useReducer(
        expenseCategoryReducer,
        []
    );

    useEffect(() => {
        console.log("user", user);

        setIsLoading(true);

        getExpenseCategoryByUserId({ userId: user?.id })
            .then((response) => {
                expenseCategoriesDispatch({
                    type: "SET_INITIALIZE",
                    payload: response,
                });
            })
            .catch((error) => {
                console.error(error);
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [user]);

    return { expenseCategories, expenseCategoriesDispatch, isLoading, isError };
}
