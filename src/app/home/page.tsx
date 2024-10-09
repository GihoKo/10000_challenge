import NavigateButtonButton from "@/components/button/NavigateButton";
import ChallengeContainer from "./_components/ChallengeContainer";
import NavigateLink from "../../components/Link/NavigateLink";
import expensesSvg from "@/images/svg/money.svg";
import challengeSvg from "@/images/svg/challenge.svg";

export default function Home() {
    return (
        <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">진행중인 챌린지에요.</h2>

                <ChallengeContainer />

                <NavigateButtonButton
                    path={"/home/challenge/add"}
                    text="추가하기"
                    mt="mt-2"
                />
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">지출을 관리해볼까요?</h2>

                <NavigateLink
                    href="/expenses"
                    image={expensesSvg}
                    text="지출 관리하러 가기"
                />
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">지난 챌린지들을 볼까요?</h2>

                <NavigateLink
                    href="/previous-challenges"
                    image={challengeSvg}
                    text="지난 챌린지 보러 가기"
                />
            </div>
        </div>
    );
}
