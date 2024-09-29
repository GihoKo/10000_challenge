"use client";

import { useParams } from "next/navigation";

export default function Detail() {
    const { expenseId } = useParams();

    return <>detail</>;
}
