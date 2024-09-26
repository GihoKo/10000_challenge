"use client";

import ConfirmButton from "@/components/button/ConfirmButton";
import PageContentHeader from "@/components/Header/PageContentHeader";
import Input from "@/components/input/input";
import Label from "@/components/label/label";
import { useState } from "react";
import { FormData } from "./page.type";

export default function Add() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        resolution: "",
        dailyExpenseLimit: "",
        challengeDuration: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("챌린지 추가");
    };

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, name: e.target.value });
    };

    const handleChangeResolution = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, resolution: e.target.value });
    };

    const handleChangeDailyExpenseLimit = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({ ...formData, dailyExpenseLimit: e.target.value });
    };

    const handleChangeChallengeDuration = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({ ...formData, challengeDuration: e.target.value });
    };

    return (
        <div>
            <PageContentHeader text="챌린지를 추가할께요" />

            <form onSubmit={handleSubmit}>
                <div className="mt-2">
                    <Label htmlFor="name" text="챌린지 이름을 입력해주세요">
                        <Input
                            id="name"
                            type="text"
                            placeholder="챌린지 이름을 입력해주세요"
                            value={formData.name}
                            onChange={handleChangeName}
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
                            type="text"
                            placeholder="스스로의 다짐을 입력해주세요"
                            value={formData.resolution}
                            onChange={handleChangeResolution}
                        />
                    </Label>
                </div>

                <div className="mt-2">
                    <Label
                        htmlFor="dailyExpenseLimit"
                        text="매일 목표로 할 지출 금액을 입력해주세요"
                    >
                        <Input
                            id="dailyExpenseLimit"
                            type="text"
                            placeholder="매일 목표로 할 지출 금액을 입력해주세요"
                            value={formData.dailyExpenseLimit}
                            onChange={handleChangeDailyExpenseLimit}
                        />
                    </Label>
                </div>

                <div className="mt-2">
                    <Label
                        htmlFor="challengeDuration"
                        text="챌린지를 진행할 기간을 입력해주세요"
                    >
                        <Input
                            id="challengeDuration"
                            type="text"
                            placeholder="챌린지를 진행할 기간을 입력해주세요"
                            value={formData.challengeDuration}
                            onChange={handleChangeChallengeDuration}
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
