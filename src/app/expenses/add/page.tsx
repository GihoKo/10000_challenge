"use client";

import ConfirmButton from "@/components/button/ConfirmButton";
import ExpenseCategorySelect from "@/components/input/ExpenseCategorySelect";
import PageContentHeader from "@/components/Header/PageContentHeader";
import useAddPage from "./_components/Main.hook";
import DesciptionInput from "./_components/DesciptionInput";
import AmountInput from "./_components/AmountInput";
import DateInput from "./_components/DateInput";

export default function Add() {
    return (
        <div>
            <PageContentHeader text="지출 추가하기" />
        </div>
    );
}
