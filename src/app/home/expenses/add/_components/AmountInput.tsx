import Input from "@/components/input/input";
import Label from "@/components/label/label";
import { AmountInputProps } from "./AmountInput.type";

export default function AmountInput({
    values,
    handleInputChange,
}: AmountInputProps) {
    return (
        <Label htmlFor="amount" text="지출 금액을 입력해주세요.">
            <Input
                id="amount"
                name="amount"
                type="text"
                placeholder="지출 금액을 입력해주세요"
                value={values.amount}
                onChange={handleInputChange}
            />
        </Label>
    );
}
