import NavigateButtonButton from "@/components/button/NavigateButton";
import Date from "../Date/Date";
import ExpenseContainerOnClient from "../ExpenseContainer/ExpenseContainerOnClient";

export default function Main() {
    return (
        <div>
            <Date />

            <h3 className="text-lg mb-2">오늘 하루는 어땠나요?</h3>

            <ExpenseContainerOnClient />

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
