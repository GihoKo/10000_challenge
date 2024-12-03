import Input from "@/components/input/input";
import Label from "@/components/label/label";
import { DesciptionInputProps } from "./DesciptionInput.type";

export default function DesciptionInput({
    values,
    handleInputChange,
}: DesciptionInputProps) {
    return (
        <Label htmlFor="description" text="지출 내용을 입력해주세요.">
            <Input
                id="description"
                name="description"
                type="text"
                placeholder="지출 내용을 입력해주세요"
                value={values.description}
                onChange={handleInputChange}
            />
        </Label>
    );
}
