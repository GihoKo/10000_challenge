"use client";

import { deleteExpense } from "@/apis/services/expense";
import DangerousButton from "@/components/button/DangerousButton";
import PageContentHeader from "@/components/Header/PageContentHeader";
import { useParams, useRouter } from "next/navigation";

export default function Header() {
    const { expenseId } = useParams();
    const router = useRouter();

    const handleDelete = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        deleteExpense(expenseId as string).then(() => {
            router.push("/home/expenses");
        });
    };

    return (
        <div className="flex justify-between items-center">
            <PageContentHeader text="지출 수정" />
            <DangerousButton text="삭제" onClick={handleDelete} width="w-fit" />
        </div>
    );
}
