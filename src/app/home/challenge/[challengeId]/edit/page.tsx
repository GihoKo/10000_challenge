import PageTransition from "@/components/animated/PageTransition";
import Header from "./_components/Header/Header";
import Main from "./_components/Main/Main";

export default function Edit() {
    return (
        <PageTransition direction="left">
            <Header />

            <Main />
        </PageTransition>
    );
}
