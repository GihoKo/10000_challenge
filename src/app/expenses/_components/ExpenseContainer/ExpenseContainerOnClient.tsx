"use client";

import { Suspense } from "react";
import { ExpenseContainerOnServer } from "./ExpenseContainerOnServer";

export default function ExpenseContainerOnClient() {
    return (
        <Suspense fallback={<div>데이터를 불러오는 중 입니다...</div>}>
            <ExpenseContainerOnServer />
        </Suspense>
    );
}
