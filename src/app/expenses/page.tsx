import PageContentHeader from "@/components/Header/PageContentHeader";
import Main from "./_components/Main";
import AnimatedPage from "@/components/animated/animatedPage";

export default function Expenses() {
    return (
        <AnimatedPage>
            <div>
                <PageContentHeader text="오늘의 지출" />
                <Main />
            </div>
        </AnimatedPage>
    );
}
