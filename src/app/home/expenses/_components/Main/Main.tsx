"use client";

import Date from "../Date/Date";
import React, { Suspense } from "react";
import ExpenseContainer from "../ExpenseContainer/ExpenseContainer";
import DefaultNavigateLink from "@/components/Link/DefaultNavigateLink";

export default function Main() {
    return (
        <div>
            <Date />

            <h3 className="text-lg mb-2">오늘 하루는 어땠나요?</h3>

            <ExpenseContainer />

            <div className="flex justify-end mt-8">
                <DefaultNavigateLink
                    href="/home/expenses/add"
                    width="w-auto"
                    text="추가"
                />
            </div>
        </div>
    );
}
