import NavigateLink from "../../components/Link/NavigateLink";
import expensesSvg from "@/images/svg/money.svg";
import challengeSvg from "@/images/svg/challenge.svg";
import DefaultNavigateLink from "@/components/Link/DefaultNavigateLink";
import PageTransition from "@/components/animated/PageTransition";
import { createClient } from "@/supabase/server";
import { getIncompleteChallengesByUserId } from "@/apis/services/challenge";
import Challenge from "./_components/Challenge/Challenge";

export default async function Home() {
    const supabase = createClient();

    const { data } = await supabase.auth.getUser();

    const inCompletedChallenges = await getIncompleteChallengesByUserId({
        userId: data.user?.id,
    });

    return (
        <PageTransition direction="up">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold">진행중인 챌린지에요.</h2>

                    <div className="flex flex-col gap-2">
                        {inCompletedChallenges.map((challenge) => (
                            <Challenge
                                key={challenge.id}
                                challenge={challenge}
                            />
                        ))}
                    </div>

                    <DefaultNavigateLink
                        href={"/home/challenge/add"}
                        text="추가하기"
                        mt="mt-2"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold">지출을 관리해볼까요?</h2>

                    <NavigateLink
                        href="/home/expenses"
                        image={expensesSvg}
                        alt="지출 관리하러 가기 이미지"
                        text="지출 관리하러 가기"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold">
                        전체 챌린지들을 볼까요?
                    </h2>

                    <NavigateLink
                        href="/home/challenge"
                        image={challengeSvg}
                        alt="전체 챌린지 보러 가기 이미지"
                        text="전체 챌린지 보러 가기"
                    />
                </div>
            </div>
        </PageTransition>
    );
}
