"use client";

import ConfirmButton from "@/components/button/ConfirmButton";
import PageContentHeader from "@/components/Header/PageContentHeader";
import Input from "@/components/input/input";
import Label from "@/components/label/label";
import { useState } from "react";
import { Values } from "./page.type";

export default function Add() {
    const [values, setValues] = useState<Values>({
        name: "",
        resolution: "",
        dailySaving: "",
        goalDate: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("챌린지 추가");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // DATE 자료형으로 저장 ex) YYYY-MM-DD
        const date = new Date(e.target.value);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;

        setValues({ ...values, [e.target.name]: formattedDate });
    };

    return (
        <div>
            <PageContentHeader text="챌린지를 추가할께요" />

            <form onSubmit={handleSubmit}>
                <div className="mt-2">
                    <Label htmlFor="name" text="챌린지 이름을 입력해주세요">
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="챌린지 이름을 입력해주세요"
                            value={values.name}
                            onChange={handleChange}
                        />
                    </Label>
                </div>

                <div className="mt-2">
                    <Label
                        htmlFor="resolution"
                        text="스스로의 다짐을 입력해주세요"
                    >
                        <Input
                            id="resolution"
                            name="resolution"
                            type="text"
                            placeholder="스스로의 다짐을 입력해주세요"
                            value={values.resolution}
                            onChange={handleChange}
                        />
                    </Label>
                </div>

                <div className="mt-2">
                    <Label
                        htmlFor="dailySaving"
                        text="매일 목표로 할 지출 금액을 입력해주세요"
                    >
                        <Input
                            id="dailySaving"
                            name="dailySaving"
                            type="text"
                            placeholder="매일 목표로 할 지출 금액을 입력해주세요"
                            value={values.dailySaving}
                            onChange={handleChange}
                        />
                    </Label>
                </div>

                <div className="mt-2">
                    <Label
                        htmlFor="goalDate"
                        text="챌린지 목표 날짜를 입력해주세요"
                    >
                        <Input
                            id="goalDate"
                            name="goalDate"
                            type="date"
                            placeholder="챌린지 목표 날짜를 입력해주세요"
                            value={values.goalDate}
                            onChange={handleDateChange}
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
