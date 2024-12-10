"use client";

import ImageWrapper from "@/components/ImageWrapper";
import rightArrowSvg from "@/images/svg/right-arrow.svg";
import Link from "next/link";
import { NavigateLinkProps } from "./NavigateLink.type";

export default function NavigateLink({ href, image, text }: NavigateLinkProps) {
    return (
        <Link
            href={href}
            className="w-full rounded-lg flex justify-between px-4 py-4 bg-blue-50"
        >
            <div className="flex items-center gap-1">
                <ImageWrapper
                    src={image}
                    alt="돈 이미지"
                    width={24}
                    height={24}
                />
                <span className="text-sm font-medium">{text}</span>
            </div>

            <div>
                <ImageWrapper
                    src={rightArrowSvg}
                    alt="오른쪽 화살표 이미지"
                    width={24}
                    height={24}
                />
            </div>
        </Link>
    );
}
