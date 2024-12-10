import PageContentHeader from "@/components/Header/PageContentHeader";
import Main from "./_components/Main/Main";
import PageTransition from "@/components/animated/PageTransition";

export default function Expenses() {
    return (
        <PageTransition direction="up">
            <PageContentHeader text="오늘의 지출" />
            <Main />
        </PageTransition>
    );
}
