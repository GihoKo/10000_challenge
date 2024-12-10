import PageContentHeader from "@/components/Header/PageContentHeader";
import Main from "./_components/Main";
import PageTransition from "@/components/animated/PageTransition";

export default function Add() {
    return (
        <PageTransition direction="left">
            <PageContentHeader text="지출 추가하기" />

            <Main />
        </PageTransition>
    );
}
