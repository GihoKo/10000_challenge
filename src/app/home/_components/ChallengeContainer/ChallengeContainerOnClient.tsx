"use client";

import { Suspense } from "react";
import { ChallengeContainerOnServer } from "./ChallengeContainerOnServer";

export default function ChallengeContainerOnClient() {
    return (
        <Suspense fallback={<div>데이터를 불러오는 중 입니다...</div>}>
            <ChallengeContainerOnServer />
        </Suspense>
    );
}
