import NavigateButtonButton from "@/components/button/NavigateButton";
import ExpenseContainer from "./ExpenseContainer";
import Date from "./Date";
import { Suspense } from "react";

export default function Main() {
    return (
        <div>
            <Date />

            <h3 className="text-lg mb-2">오늘 하루는 어땠나요?</h3>

            <ExpenseContainer />

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
