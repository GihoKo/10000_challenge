"use client";

import ConfirmButton from "@/components/button/ConfirmButton";
import ExpenseCategorySelect from "@/components/input/ExpenseCategorySelect";
import Label from "@/components/label/label";
import ExpenseInput from "../../../../../../components/input/ExpenseInput";
import InputErrorMessage from "@/components/ErrorMessage/InputErrorMessage";
import { DevTool } from "@hookform/devtools";
import useMain from "./Main.hook";

export default function Main() {
    const {
        register,
        handleSubmit,
        onSubmit,
        handleSelectChange,
        errors,
        control,
        expenseCategories,
    } = useMain();

    return (
        <main>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
                noValidate
            >
                <div className="mt-2">
                    <Label
                        htmlFor="category"
                        text="지출 카테고리를 선택해주세요."
                    >
                        <ExpenseCategorySelect
                            handleSelectChange={handleSelectChange}
                            expenseCategories={expenseCategories}
                        />
                    </Label>
                </div>

                <div className="mt-2">
                    <Label
                        htmlFor="description"
                        text="지출 설명을 입력해주세요."
                    >
                        <ExpenseInput
                            id="description"
                            type="text"
                            register={register}
                        />
                        {errors.description && (
                            <InputErrorMessage
                                message={errors.description.message as string}
                            />
                        )}
                    </Label>
                </div>

                <div className="mt-2">
                    <Label htmlFor="amount" text="금액을 입력해주세요.">
                        <ExpenseInput
                            id="amount"
                            type="number"
                            register={register}
                        />
                        {errors.amount && (
                            <InputErrorMessage
                                message={errors.amount.message as string}
                            />
                        )}
                    </Label>
                </div>

                <div className="mt-2">
                    <Label htmlFor="date" text="지출 날짜를 선택해주세요.">
                        <ExpenseInput
                            id="date"
                            type="date"
                            register={register}
                        />
                        {errors.date && (
                            <InputErrorMessage
                                message={errors.date.message as string}
                            />
                        )}
                    </Label>
                </div>

                <DevTool control={control} />

                <ConfirmButton type="submit" text="수정" />
            </form>
        </main>
    );
}
