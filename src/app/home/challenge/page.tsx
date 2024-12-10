import PageContentHeader from "@/components/Header/PageContentHeader";
import NavigateButton from "@/components/button/NavigateButton";
import ChallengesContainer from "./_components/ChallengesContainer";
import { Suspense } from "react";
import PageTransition from "@/components/animated/PageTransition";

export default function Challenge() {
    return (
        <PageTransition direction="up">
            <PageContentHeader text="전체 챌린지 목록이에요." />

            <Suspense fallback={<div>데이터를 불러오는 중 입니다...</div>}>
                <ChallengesContainer />
            </Suspense>

            <NavigateButton
                path={"/home/challenge/add"}
                text="추가하기"
                mt="mt-8"
            />
        </PageTransition>
    );
}
