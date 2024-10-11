"use client";

import { Suspense } from "react";
import { ExpenseContainerServerComponent } from "./ExpenseContainerServerComponent";

export default function ExpenseContainer() {
    return (
        <Suspense fallback={<div>데이터를 불러오는 중 입니다...</div>}>
            <ExpenseContainerServerComponent />
        </Suspense>
    );
}
