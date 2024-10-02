"use client";

import ConfirmButton from "@/components/button/ConfirmButton";
import ExpenseCategorySelect from "@/components/input/ExpenseCategorySelect";
import PageContentHeader from "@/components/Header/PageContentHeader";
import useAddPage from "./page.hook";
import DesciptionInput from "./_components/DesciptionInput";
import AmountInput from "./_components/AmountInput";
import DateInput from "./_components/DateInput";

export default function Add() {
    const { values, handleInputChange, handleCategoryChange, handleSubmit } =
        useAddPage();

    return (
        <div>
            <PageContentHeader text="지출 추가하기" />

            <form onSubmit={handleSubmit}>
                <div className="mt-2">
                    <ExpenseCategorySelect
                        value={values.category}
                        onChange={handleCategoryChange}
                    />
                </div>

                <div className="mt-2">
                    <DesciptionInput
                        values={values}
                        handleInputChange={handleInputChange}
                    />
                </div>

                <div className="mt-2">
                    <AmountInput
                        values={values}
                        handleInputChange={handleInputChange}
                    />
                </div>

                <div className="mt-2">
                    <DateInput
                        values={values}
                        handleInputChange={handleInputChange}
                    />
                </div>

                <div className="mt-10">
                    <ConfirmButton type="submit" text="추가" />
                </div>
            </form>
        </div>
    );
}
