import PageTransition from "@/components/animated/PageTransition";
import Header from "./_components/Header";
import Main from "./_components/Main";

export default function Edit() {
    return (
        <PageTransition direction="left">
            <Header />
            <Main />
        </PageTransition>
    );
}
