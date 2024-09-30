import ConfirmButton from "@/components/button/ConfirmButton";
import NagativeButton from "@/components/button/NagativeButton";
import Input from "@/components/input/input";
import Label from "@/components/label/label";
import supabaseClient from "@/supabase/supabaseClient";
import { useCallback, useEffect, useState } from "react";

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleEdit = () => {
        console.log(values);
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

    const handleUpdateExpense = useCallback(async () => {
        const updatedExpense = {
            description: values.description,
            category: values.category,
            amount: values.amount,
        };

        const { data, error } = await supabaseClient
            .from("expense")
            .update(updatedExpense)
            .eq("id", modalExpenseId);

        if (error) {
            throw new Error(error.message);
        }

        console.log(data);
    }, [modalExpenseId, values]);

    useEffect(() => {
        getExpenseById().then((expense) => {
            setValues(() => expense);
        });
    }, [modalExpenseId, getExpenseById]);

    return (
        <div className="flex justify-center items-center bg-black bg-opacity-30 fixed inset-0">
            <form
                onSubmit={handleEdit}
                className="flex flex-col gap-4 rounded-lg p-4 w-full bg-white mx-6"
            >
                <h3 className="text-lg">지출 수정</h3>

                <Label text="설명" htmlFor="description">
                    <Input
                        id="description"
                        name="description"
                        type="text"
                        placeholder="설명"
                        value={values.description}
                        onChange={handleChange}
                    />
                </Label>

                <Label text="카테고리" htmlFor="category">
                    <Input
                        id="category"
                        name="category"
                        type="text"
                        placeholder="카테고리"
                        value={values.category}
                        onChange={handleChange}
                    />
                </Label>

                <Label text="금액" htmlFor="amount">
                    <Input
                        id="amount"
                        name="amount"
                        type="text"
                        placeholder="금액"
                        value={values.amount}
                        onChange={handleChange}
                    />
                </Label>

                <div className="flex gap-2">
                    <ConfirmButton
                        type="button"
                        text="수정"
                        onClick={handleUpdateExpense}
                    />
                    <NagativeButton
                        type="button"
                        text="취소"
                        onClick={handleModalClose}
                    />
                </div>
            </form>
        </div>
    );
}
