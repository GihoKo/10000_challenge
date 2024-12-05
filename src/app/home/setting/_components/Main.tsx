export default function Main() {
    return (
        <main>
            <div className="flex flex-col gap-4 py-4">
                <div className="font-bold">유저 정보</div>
                <div>유저 이름</div>
                <div>유저 이메일</div>
                <div>로그아웃</div>
            </div>

            <div className="w-full h-1 bg-gray-200 my-2" />

            <div className="flex flex-col gap-4 py-4">
                <div className="font-bold">소비 카테고리</div>
                <div>카테고리 영역</div>
                {/** 버튼 클릭시 모달창이 열려 Create,Delete */}
                <div>카테고리 관리 버튼</div>
            </div>
        </main>
    );
}
