import PageContentHeader from "@/components/Header/PageContentHeader";
import Main from "./_components/Main";

export default function Setting() {
    return (
        <div className="flex flex-col">
            <PageContentHeader text="설정 페이지 입니다." />

            <Main />
        </div>
    );
}
