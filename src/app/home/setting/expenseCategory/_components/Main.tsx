"use client";

import ImageWrapper from "@/components/ImageWrapper";
import deleteSvg from "@/images/svg/delete-black.svg";
import editSvg from "@/images/svg/edit-black.svg";
import useModalStore from "@/stores/modalStore";
import { useEffect, useReducer, useRef, useState } from "react";
import { getExpenseCategoryByUserId } from "@/apis/services/expenseCategory";
import UpdateExpenseCategoryModal from "./UpdateExpenseCategoryModal";
import DeleteExpenseCategoryModal from "./DeleteExpenseCategoryModal";
import AddExpenseCategorySection from "./AddExpenseCategorySection";

export interface ExpenseCategory {
    id: number;
    name: string;
    user_id: string;
    created_at: string;
}

export type ExpenseCategoryAction =
    | {
          type: "SET_INITIALIZE";
          payload: ExpenseCategory[];
      }
    | {
          type: "ADD";
          payload: ExpenseCategory;
      }
    | {
          type: "UPDATE";
          payload: { id: number; name: string };
      }
    | {
          type: "DELETE";
          payload: { id: number };
      };

const expenseCategoryReducer = (
    state: ExpenseCategory[],
    action: ExpenseCategoryAction
) => {
    switch (action.type) {
        case "SET_INITIALIZE":
            return action.payload;
        case "ADD":
            return [...state, action.payload];
        case "UPDATE":
            return state.map((category) => {
                if (category.id === action.payload.id) {
                    return {
                        ...category,
                        name: action.payload.name,
                    };
                }

                return category;
            });
        case "DELETE":
            return state.filter(
                (category) => category.id !== action.payload.id
            );
        default:
            return state;
    }
};

export default function Main() {
    const { setIsModalOpen } = useModalStore();

    const [expenseCategories, expenseCategoriesDispatch] = useReducer(
        expenseCategoryReducer,
        []
    );
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleUpdateCategoryModalOpenButtonClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        const currentExpenseCategoryName = e.currentTarget.dataset.name;
        const currentExpenseCategoryId = Number(e.currentTarget.dataset.id);

        if (!currentExpenseCategoryName || !currentExpenseCategoryId) return;

        const currentExpenseCategory = {
            id: currentExpenseCategoryId,
            name: currentExpenseCategoryName,
        };

        setIsModalOpen(
            <UpdateExpenseCategoryModal
                currentExpenseCategory={currentExpenseCategory}
                expenseCategoriesDispatch={expenseCategoriesDispatch}
            />
        );
    };

    const handleDeleteCategoryModalOpenButtonClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        const currentExpenseCategoryId = Number(e.currentTarget.dataset.id);

        if (!currentExpenseCategoryId) return;

        setIsModalOpen(
            <DeleteExpenseCategoryModal
                currentExpenseCategoryId={currentExpenseCategoryId}
                expenseCategoriesDispatch={expenseCategoriesDispatch}
            />
        );
    };

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

    if (isLoading) return <div>소비 카테고리 목록을 불러오는 중...</div>;

    if (isError) return <div>오류가 발생했습니다.</div>;

    return (
        <main className="flex flex-col gap-4">
            <AddExpenseCategorySection
                expenseCategoriesDispatch={expenseCategoriesDispatch}
            />

            <div className="flex flex-col gap-2">
                {expenseCategories.length !== 0 ? (
                    expenseCategories.map((category) => {
                        return (
                            <div
                                key={category.id}
                                className="flex justify-between items-center bg-gray-100 p-2 rounded-lg
            "
                            >
                                <span className="text-base">
                                    {category.name}
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        data-name={category.name}
                                        data-id={category.id}
                                        className="border border-gray-300 rounded-lg p-2 bg-white"
                                        type="button"
                                        onClick={
                                            handleUpdateCategoryModalOpenButtonClick
                                        }
                                    >
                                        <ImageWrapper
                                            src={editSvg}
                                            alt="수정"
                                            width={20}
                                            height={20}
                                        />
                                    </button>
                                    <button
                                        className="border border-gray-300  rounded-lg p-2 bg-white"
                                        type="button"
                                        data-id={category.id}
                                        onClick={
                                            handleDeleteCategoryModalOpenButtonClick
                                        }
                                    >
                                        <ImageWrapper
                                            src={deleteSvg}
                                            alt="삭제"
                                            width={20}
                                            height={20}
                                        />
                                    </button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="rounded-lg flex items-center bg-gray-200 p-2">
                        <span className="text-base">
                            소비 카테고리를 추가하세요
                        </span>
                    </div>
                )}
            </div>
        </main>
    );
}
