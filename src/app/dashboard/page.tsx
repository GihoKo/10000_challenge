import NavigateButtonButton from "@/components/button/NavigateButtonButton";
import ChallengeContainer from "./_components/ChallengeContainer";
import PageContentHeader from "@/components/Header/PageContentHeader";

// @ToDO 최근 소비에 대한 통계 구현
export default function Dashboard() {
    return (
        <div className="flex flex-col gap-12">
            <div>
                <PageContentHeader text="진행중인 챌린지에요." />

                <ChallengeContainer />

                <NavigateButtonButton
                    path={"/dashboard/add"}
                    text="추가하기"
                    mt="mt-2"
                />
            </div>

            {/* <div>
                <h2 className="text-2xl font-bold mb-3.5">
                    최근 소비에 대한 통계에요.
                </h2>
            </div> */}
        </div>
    );
}
