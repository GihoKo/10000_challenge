import { getExpenseCategoryByUserId } from "@/apis/services/expenseCategory";
import expenseCategoryReducer from "@/reducers/expenseCategoryReducer";
import { useEffect, useReducer, useState } from "react";

export default function useMain() {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [expenseCategories, expenseCategoriesDispatch] = useReducer(
        expenseCategoryReducer,
        []
    );

    useEffect(() => {
        setIsLoading(true);

        getExpenseCategoryByUserId({
            userId: process.env.NEXT_PUBLIC_USER_ID as string,
        })
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
    }, []);

    return { expenseCategories, expenseCategoriesDispatch, isLoading, isError };
}
