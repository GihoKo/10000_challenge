"use client";

import ConfirmButton from "@/components/button/ConfirmButton";
import PageContentHeader from "@/components/Header/PageContentHeader";
import Input from "@/components/input/input";
import Label from "@/components/label/label";
import { useState } from "react";
import { Values } from "./page.type";
import supabaseClient from "@/supabase/supabaseClient";
import { useRouter } from "next/navigation";

export default function Add() {
    const [values, setValues] = useState<Values>({
        name: "",
        resolution: "",
        dailySaving: 0,
        goalDate: "YYYY-MM-DD",
    });

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        addChallenge();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedDate = formatDate(e.target.value);

        setValues({ ...values, [e.target.name]: formattedDate });
    };

    const createStartDate = () => {
        const startDate = new Date();
        const year = startDate.getFullYear();
        const month = String(startDate.getMonth() + 1).padStart(2, "0");
        const day = String(startDate.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    };

    const addChallenge = async () => {
        const challenge = {
            name: values.name,
            resolution: values.resolution,
            daily_saving: values.dailySaving,
            start_date: createStartDate(),
            goal_date: values.goalDate,
            user_id: process.env.NEXT_PUBLIC_USER_ID,
        };

        const { data, error } = await supabaseClient
            .from("challenge")
            .insert(challenge)
            .select();

        if (error) {
            console.log(error);
        }

        router.push("/home");
    };

    const formatDate = (date: string) => {
        // DATE 자료형으로 저장 ex) YYYY-MM-DD
        const newDate = new Date(date);

        const year = newDate.getFullYear();
        const month = String(newDate.getMonth() + 1).padStart(2, "0");
        const day = String(newDate.getDate()).padStart(2, "0");
        const formattedDate = `${year}-${month}-${day}`;

        return formattedDate;
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
