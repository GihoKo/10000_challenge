import PageContentHeader from "@/components/Header/PageContentHeader";

export default function Header() {
    return (
        <div>
            <PageContentHeader text="오늘의 지출" />
            <div className="text-sm mb-10">
                오늘은
                <span className="text-xl font-medium mx-1 text-blue-700">
                    2024월 09월 05일
                </span>
                이에요.
            </div>
        </div>
    );
}
