"use client";

import PageContentHeader from "@/components/Header/PageContentHeader";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const handleReset = () => {
        reset();
    };

    return (
        <div>
            <PageContentHeader text="오류가 발생했습니다." />
            <button onClick={handleReset}>재시도하기</button>
        </div>
    );
}
