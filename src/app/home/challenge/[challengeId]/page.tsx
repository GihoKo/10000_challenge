import PageTransition from "@/components/animated/PageTransition";
import Header from "./_componenets/Header/Header";
import Main from "./_componenets/Main/Main";

export default function Challenge() {
    return (
        <PageTransition direction="left">
            <Header />

            <Main />
        </PageTransition>
    );
}
