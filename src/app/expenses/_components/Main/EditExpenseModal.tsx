import ConfirmButton from "@/components/button/ConfirmButton";
import NagativeButton from "@/components/button/NagativeButton";
import ExpenseCategorySelect from "@/components/input/ExpenseCategorySelect";
import Input from "@/components/input/input";
import Label from "@/components/label/label";
import supabaseClient from "@/supabase/supabaseClient";
import { useCallback, useEffect, useState } from "react";
import close from "@/images/svg/close.svg";
import Image from "next/image";

interface EditExpenseModalProps {
    modalExpenseId: string | null;
    handleModalClose: () => void;
}

export default function EditExpenseModal({
    modalExpenseId,
    handleModalClose,
}: EditExpenseModalProps) {
    const [values, setValues] = useState({
        description: "",
        category: "",
        amount: "",
    });
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
        updateExpense();
    };

    const handleDelete = () => {
        deleteExpense();
        handleDeleteModalClose();
        handleModalClose();
    };

    const getExpenseById = useCallback(async () => {
        const { data: expense, error } = await supabaseClient
            .from("expense")
            .select("*")
            .eq("id", modalExpenseId);

        if (error) {
            throw new Error(error.message);
        }

        return expense[0];
    }, [modalExpenseId]);

    const updateExpense = useCallback(async () => {
        const updatedExpense = {
            description: values.description,
            category: values.category,
            amount: values.amount,
        };

        const { data, error } = await supabaseClient
            .from("expense")
            .update(updatedExpense)
            .eq("id", modalExpenseId)
            .select();

        if (error) {
            throw new Error(error.message);
        }

        return data;
    }, [modalExpenseId, values]);

    const deleteExpense = useCallback(async () => {
        const { error } = await supabaseClient
            .from("expense")
            .delete()
            .eq("id", modalExpenseId);

        if (error) {
            throw new Error(error.message);
        }

        return null;
    }, [modalExpenseId]);

    const handleDeleteModalOpen = () => {
        setIsDeleteModalOpen(true);
    };

    const handleDeleteModalClose = () => {
        setIsDeleteModalOpen(false);
    };

    useEffect(() => {
        getExpenseById().then((expense) => {
            setValues(() => expense);
        });
    }, [modalExpenseId, getExpenseById]);

    return (
        <div className="flex justify-center items-center bg-black bg-opacity-30 fixed inset-0">
            <form
                onSubmit={handleEdit}
                className="flex flex-col gap-4 rounded-lg p-4 w-full bg-white mx-6 relative"
            >
                <h3 className="text-lg">지출 수정</h3>

                <Label text="설명" htmlFor="description">
                    <Input
                        id="description"
                        name="description"
                        type="text"
                        placeholder="설명"
                        value={values.description}
                        onChange={handleInputChange}
                    />
                </Label>

                <ExpenseCategorySelect
                    value={values.category}
                    onChange={handleSelectChange}
                />

                <Label text="금액" htmlFor="amount">
                    <Input
                        id="amount"
                        name="amount"
                        type="text"
                        placeholder="금액"
                        value={values.amount}
                        onChange={handleInputChange}
                    />
                </Label>

                <div className="flex gap-2">
                    <ConfirmButton type="submit" text="수정" />
                    <NagativeButton
                        type="button"
                        text="삭제"
                        onClick={handleDeleteModalOpen}
                    />
                    <button
                        type="button"
                        onClick={handleModalClose}
                        className="absolute top-3 right-3"
                    >
                        <Image
                            src={close}
                            alt="모달 닫기 아이콘"
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </form>
            {isDeleteModalOpen && (
                <div>
                    삭제하시겠습니까?
                    <ConfirmButton
                        type="button"
                        text="삭제"
                        onClick={handleDelete}
                    />
                </div>
            )}
        </div>
    );
}
