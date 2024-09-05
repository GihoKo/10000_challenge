import NavigateButtonButton from "@/components/button/NavigateButtonButton";
import ExpenseContainer from "./ExpenseContainer";

export default function Main() {
    return (
        <div>
            <h3 className="text-xl mb-2">오늘 하루는 어땠나요?</h3>

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
