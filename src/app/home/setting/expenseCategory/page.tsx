import PageContentHeader from "@/components/Header/PageContentHeader";
import Main from "./_components/Main/Main";
import PageTransition from "@/components/animated/PageTransition";

export default function ExpenseCategoryPage() {
    return (
        <PageTransition direction="left">
            <PageContentHeader text="소비 카테고리 설정" />

            <Main />
        </PageTransition>
    );
}
