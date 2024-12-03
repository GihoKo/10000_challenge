"use client";

import ConfirmButton from "@/components/button/ConfirmButton";
import ExpenseCategorySelect from "@/components/input/ExpenseCategorySelect";
import Input from "@/components/input/input";
import Label from "@/components/label/label";
import useForm from "./Form.hook";

export default function Form() {
    const {
        isLoading,
        isError,
        expense,
        handleInputChange,
        handleSelectChange,
        handleEdit,
    } = useForm();

    if (isLoading) {
        return <div>데이터를 불러오는 중 입니다...</div>;
    }

    if (isError) {
        return <div>데이터 가져오기를 실패했습니다. 재시도해주세요.</div>;
    }

    return (
        <form onSubmit={handleEdit} className="flex flex-col gap-4">
            <Label text="설명" htmlFor="description">
                <Input
                    id="description"
                    name="description"
                    type="text"
                    placeholder="설명"
                    value={expense.description}
                    onChange={handleInputChange}
                />
            </Label>

            <ExpenseCategorySelect
                value={expense.category}
                onChange={handleSelectChange}
            />

            <Label text="금액" htmlFor="amount">
                <Input
                    id="amount"
                    name="amount"
                    type="text"
                    placeholder="금액"
                    value={expense.amount}
                    onChange={handleInputChange}
                />
            </Label>

            <ConfirmButton type="submit" text="수정" />
        </form>
    );
}
