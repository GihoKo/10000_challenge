import NavigateButtonButton from "@/components/button/NavigateButtonButton";
import ChallengeContainer from "./_components/ChallengeContainer";
import NavigateToExpensePageButton from "./_components/NavigateToExpensePageButton";

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
                <NavigateToExpensePageButton />
            </div>
        </div>
    );
}
