import Image from "next/image";
import Label from "../label/label";
import dropDownArrow from "@/images/svg/dropdown-arrow.svg";
import FocuseddropDownArrow from "@/images/svg/dropdown-arrow-focused.svg";
import { useState } from "react";

interface ExpenseCategorySelectProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function ExpenseCategorySelect({
    value,
    onChange,
}: ExpenseCategorySelectProps) {
    const [isFocusedDropDown, setIsFocusedDropDown] = useState(false);

    // 포커스 시
    const handleFocusDropDown = () => {
        setIsFocusedDropDown(true);
    };

    // 포커스 아웃 시
    const handleBlurDropDown = () => {
        setIsFocusedDropDown(false);
    };

    // 이미지 반환 함수
    const returnDropDownImage = () => {
        if (isFocusedDropDown) {
            return FocuseddropDownArrow;
        }
        return dropDownArrow;
    };

    return (
        <Label htmlFor="category" text="카테고리를 선택해주세요.">
            <select
                id="category"
                name="category"
                className={`w-full p-2 border-2 rounded-md text-sm focus:outline-none appearance-none focus:border-blue-500 transition-all duration-300`}
                onFocus={handleFocusDropDown}
                onBlur={handleBlurDropDown}
                onChange={onChange}
                value={value}
            >
                <option value="" disabled>
                    선택해주세요
                </option>
                <option value="식비">식비</option>
                <option value="교통비">교통비</option>
                <option value="문화생활">문화생활</option>
                <option value="기타">기타</option>
            </select>
            <Image
                className="absolute right-1.5 top-[30px]"
                src={returnDropDownImage()}
                alt="드롭다운 화살표 이미지"
                width={32}
                height={32}
            />
        </Label>
    );
}
