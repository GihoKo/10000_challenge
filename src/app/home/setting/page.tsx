import PageContentHeader from "@/components/Header/PageContentHeader";
import Main from "./_components/Main";
import PageTransition from "@/components/animated/PageTransition";

export default function Setting() {
    return (
        <PageTransition direction="up">
            <div className="flex flex-col">
                <PageContentHeader text="설정" />

                <Main />
            </div>
        </PageTransition>
    );
}
