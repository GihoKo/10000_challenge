import NavigateButtonButton from "@/components/button/NavigateButton";
import ExpenseContainer from "./ExpenseContainer";
import Date from "./Date";
import { Suspense } from "react";

export default function Main() {
    return (
        <div>
            <Date />

            <h3 className="text-lg mb-2">오늘 하루는 어땠나요?</h3>

            <Suspense fallback={<div>데이터를 불러오는 중 입니다...</div>}>
                <ExpenseContainer />
            </Suspense>

            <div className="flex justify-end mt-8">
                <NavigateButtonButton
                    type="button"
                    path="/expenses/add"
                    width="w-auto"
                    text="추가"
                />
            </div>
        </div>
    );
}
