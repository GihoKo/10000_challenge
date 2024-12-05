"use client";

import DangerousButton from "@/components/button/DangerousButton";
import PageContentHeader from "@/components/Header/PageContentHeader";
import useHeader from "./Header.hook";

export default function Header() {
    const { handleDelete } = useHeader();

    return (
        <div className="flex justify-between items-center">
            <PageContentHeader text="지출 수정" />
            <DangerousButton text="삭제" onClick={handleDelete} width="w-fit" />
        </div>
    );
}
