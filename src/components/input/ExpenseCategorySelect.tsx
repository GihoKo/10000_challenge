import Image from "next/image";
import dropDownArrow from "@/images/svg/dropdown-arrow.svg";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface ExpenseCategorySelectProps {
    id: string;
    register: UseFormRegister<FieldValues>;
}

export default function ExpenseCategorySelect({
    id,
    register,
}: ExpenseCategorySelectProps) {
    return (
        <div>
            <select
                id={id}
                className={`w-full p-2 border-2 rounded-md text-sm focus:outline-none appearance-none focus:border-blue-500 transition-all duration-300`}
                {...register(id, {
                    required: {
                        value: true,
                        message: "입력이 필요합니다.",
                    },
                })}
            >
                <option value="식비">식비</option>
                <option value="교통비">교통비</option>
                <option value="문화생활">문화생활</option>
                <option value="기타">기타</option>
            </select>
            <Image
                className="absolute right-1.5 top-[30px]"
                src={dropDownArrow}
                alt="드롭다운 화살표 이미지"
                width={32}
                height={32}
            />
        </div>
    );
}
