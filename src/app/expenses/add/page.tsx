"use client";

import ConfirmButton from "@/components/button/ConfirmButton";
import Input from "@/components/input/input";
import Label from "@/components/label/label";
import Image from "next/image";
import dropDownArrow from "@/images/svg/dropdown-arrow.svg";
import FocuseddropDownArrow from "@/images/svg/dropdown-arrow-focused.svg";
import { useState } from "react";
import supabaseClient from "@/supabase/supabaseClient";

export default function Add() {
    const [isFocusedDropDown, setIsFocusedDropDown] = useState(false);
    const [values, setValues] = useState({
        category: "",
        description: "",
        amount: "",
    });

    // 드롭다운 포커스 시
    const handleFocusDropDown = () => {
        setIsFocusedDropDown(true);
    };

    // 드롭다운 포커스 아웃 시
    const handleBlurDropDown = () => {
        setIsFocusedDropDown(false);
    };

    // 드롭다운 값 선택 시
    const handleChangeDropDown = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValues((prev) => ({ ...prev, category: e.target.value }));
    };

    // 드롭다운 이미지 반환 함수
    const returnDropDownImage = () => {
        if (isFocusedDropDown || values.category !== "") {
            return FocuseddropDownArrow;
        }
        return dropDownArrow;
    };

    // Description 값 변경 시
    const handleChanegDescription = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setValues((prev) => ({ ...prev, description: e.target.value }));
    };

    // Amount 값 변경 시
    const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues((prev) => ({ ...prev, amount: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        createExpense();
    };

    const createExpense = async () => {
        const data = {
            category: values.category,
            description: values.description,
            amount: values.amount,
        };

        console.log(data);

        const response = await supabaseClient.from("expense").insert(data);

        console.log(response);
    };

    return (
        <div>
            <div>새로운 지출을 추가할께요.</div>
            <form onSubmit={handleSubmit}>
                <div className="mt-2">
                    <Label htmlFor="category" text="카테고리를 선택해주세요.">
                        <select
                            id="category"
                            className={`w-full p-4 border-2 ${
                                values.category !== ""
                                    ? "border-blue-500"
                                    : "border-gray-300"
                            } rounded-md focus:outline-none appearance-none focus:border-blue-500 transition-all duration-300`}
                            onFocus={handleFocusDropDown}
                            onBlur={handleBlurDropDown}
                            onChange={handleChangeDropDown}
                            value={values.category}
                        >
                            <option value="" disabled>
                                선택해주세요
                            </option>
                            <option value="식비">식비</option>
                            <option value="교통비">교통비</option>
                            <option value="문화생활">문화생활</option>
                            <option value="기타">기타</option>
                        </select>
                        <Image
                            className="absolute right-2 top-10"
                            src={returnDropDownImage()}
                            alt="드롭다운 화살표 이미지"
                            width={32}
                            height={32}
                        />
                    </Label>
                </div>

                <div className="mt-2">
                    <Label
                        htmlFor="description"
                        text="지출 내용을 입력해주세요."
                    >
                        <Input
                            id="description"
                            type="text"
                            placeholder="지출 내용을 입력해주세요"
                            value={values.description}
                            onChange={handleChanegDescription}
                        />
                    </Label>
                </div>

                <div className="mt-2">
                    <Label htmlFor="amount" text="지출 금액을 입력해주세요.">
                        <Input
                            id="amount"
                            type="text"
                            placeholder="지출 금액을 입력해주세요"
                            value={values.amount}
                            onChange={handleChangeAmount}
                        />
                    </Label>
                </div>

                <div className="mt-10">
                    <ConfirmButton type="submit" text="추가" />
                </div>
            </form>
        </div>
    );
}
