import { getExpenseCategoryByUserId } from "@/apis/services/expenseCategory";
import { useUser } from "@/contexts/UserContext";
import expenseCategoryReducer from "@/reducers/expenseCategoryReducer";
import { useEffect, useReducer, useState } from "react";

export default function useMain() {
    const { user } = useUser();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [expenseCategories, expenseCategoriesDispatch] = useReducer(
        expenseCategoryReducer,
        []
    );

    useEffect(() => {
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
