"use client";

import { useRouter } from "next/navigation";
import moneySvg from "@/images/svg/money.svg";
import ImageWrapper from "@/components/ImageWrapper";
import rightArrowSvg from "@/images/svg/right-arrow.svg";
import useNavigateToExpensePageButton from "./NavigateToExpensePageButton.hook";

export default function NavigateToExpensePageButton() {
    const { handleClick } = useNavigateToExpensePageButton();

    return (
        <button
            type="button"
            onClick={handleClick}
            className="w-full rounded-lg flex justify-between px-4 py-4 bg-blue-50"
        >
            <div className="flex items-center gap-1">
                <ImageWrapper
                    src={moneySvg}
                    alt="돈 이미지"
                    width={24}
                    height={24}
                />
                <span className="text-sm font-medium">지출 관리하기</span>
            </div>

            <div>
                <ImageWrapper
                    src={rightArrowSvg}
                    alt="오른쪽 화살표 이미지"
                    width={24}
                    height={24}
                />
            </div>
        </button>
    );
}
