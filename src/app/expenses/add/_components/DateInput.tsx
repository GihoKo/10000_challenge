import Input from "@/components/input/input";
import Label from "@/components/label/label";
import { DateInputProps } from "./DateInput.type";

export default function DateInput({
    values,
    handleInputChange,
}: DateInputProps) {
    return (
        <Label htmlFor="date" text="지출 날짜를 입력해주세요.">
            <Input
                id="date"
                name="date"
                type="date"
                placeholder="지출 날짜를 입력해주세요"
                value={values.date}
                onChange={handleInputChange}
            />
        </Label>
    );
}
