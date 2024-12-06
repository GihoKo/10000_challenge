"use client";

import ConfirmButton from "@/components/button/ConfirmButton";
import PageContentHeader from "@/components/Header/PageContentHeader";
import ImageWrapper from "@/components/ImageWrapper";
import { expenseCategoryMocks } from "@/mocks";
import deleteSvg from "@/images/svg/delete-black.svg";
import editSvg from "@/images/svg/edit-black.svg";
import useModalStore from "@/stores/modalStore";
import DeleteExpenseCategoryModal from "./_components/DeleteExpenseCategoryModal";
import UpdateExpenseCategoryModal from "./_components/UpdateExpenseCategoryModal";
import AddExpenseCategoryModal from "./_components/AddExpenseCategoryModal";
import { useEffect, useRef, useState } from "react";
import { getExpenseCategoryByUserId } from "@/apis/services/expenseCategory";

export interface ExpenseCategory {
    id: string;
    name: string;
    user_id: string;
    created_at: string;
}

export default function ExpenseCategoryPage() {
    const { setIsModalOpen } = useModalStore();

    const newExpenseCategoryInputRef = useRef<HTMLInputElement>(null);

    const [expenseCategories, setExpenseCategories] = useState<
        ExpenseCategory[]
    >([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleAddCategoryModalOpenButtonClick = () => {
        if (!newExpenseCategoryInputRef.current) return;

        setIsModalOpen(
            <AddExpenseCategoryModal
                newExpenseCategory={newExpenseCategoryInputRef.current.value}
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
                setExpenseCategories(response);
            })
            .catch((error) => {
                console.error(error);
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

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
                    {expenseCategories.map((category) => {
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
