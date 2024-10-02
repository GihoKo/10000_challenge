import PageContentHeader from "@/components/Header/PageContentHeader";
import Main from "./_components/Main";
import Date from "./_components/Date";

export default function Expenses() {
    return (
        <div>
            <PageContentHeader text="오늘의 지출" />
            <Main />
        </div>
    );
}
