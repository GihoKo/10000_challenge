"use client";

import ConfirmButton from "@/components/button/ConfirmButton";
import PageContentHeader from "@/components/Header/PageContentHeader";
import ImageWrapper from "@/components/ImageWrapper";
import deleteSvg from "@/images/svg/delete-black.svg";
import editSvg from "@/images/svg/edit-black.svg";
import useModalStore from "@/stores/modalStore";
import DeleteExpenseCategoryModal from "./_components/DeleteExpenseCategoryModal";
import UpdateExpenseCategoryModal from "./_components/UpdateExpenseCategoryModal";
import AddExpenseCategoryModal from "./_components/AddExpenseCategoryModal";
import { useEffect, useReducer, useRef, useState } from "react";
import { getExpenseCategoryByUserId } from "@/apis/services/expenseCategory";

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

export default function ExpenseCategoryPage() {
    const { setIsModalOpen } = useModalStore();

    const newExpenseCategoryInputRef = useRef<HTMLInputElement>(null);

    const [ExpenseCategories, ExpenseCategoriesDispatch] = useReducer(
        expenseCategoryReducer,
        []
    );
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleAddCategoryModalOpenButtonClick = () => {
        if (!newExpenseCategoryInputRef.current) return;

        setIsModalOpen(
            <AddExpenseCategoryModal
                newExpenseCategoryInputRef={newExpenseCategoryInputRef}
                ExpenseCategoriesDispatch={ExpenseCategoriesDispatch}
            />
        );
    };

    const handleUpdateCategoryModalOpenButtonClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        const currentExpenseCategory = e.currentTarget.dataset.name;

        if (!currentExpenseCategory) return;

        setIsModalOpen(
            <UpdateExpenseCategoryModal
                currentExpenseCategory={currentExpenseCategory}
            />
        );
    };

    const handleDeleteCategoryModalOpenButtonClick = () => {
        setIsModalOpen(<DeleteExpenseCategoryModal />);
    };

    useEffect(() => {
        setIsLoading(true);

        getExpenseCategoryByUserId({
            userId: process.env.NEXT_PUBLIC_USER_ID as string,
        })
            .then((response) => {
                ExpenseCategoriesDispatch({
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
        <div>
            <PageContentHeader text="소비 카테고리 설정" />

            <main className="flex flex-col gap-4">
                <div className="flex justify-between items-center gap-2">
                    <input
                        className="border border-gray-300 flex-1 rounded-lg p-2"
                        type="text"
                        placeholder="새로운 카테고리 "
                        ref={newExpenseCategoryInputRef}
                    />
                    <ConfirmButton
                        text="추가"
                        width="w-auto"
                        onClick={handleAddCategoryModalOpenButtonClick}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    {ExpenseCategories.map((category) => {
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
                    })}
                </div>
            </main>
        </div>
    );
}
