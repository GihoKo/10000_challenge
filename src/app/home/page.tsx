import NavigateButtonButton from "@/components/button/NavigateButtonButton";
import ChallengeContainer from "./_components/ChallengeContainer";
import PageContentHeader from "@/components/Header/PageContentHeader";

export default function Home() {
    return (
        <div className="flex flex-col gap-12">
            <div>
                <PageContentHeader text="진행중인 챌린지에요." />

                <ChallengeContainer />

                <NavigateButtonButton
                    path={"/home/challenge/add"}
                    text="추가하기"
                    mt="mt-2"
                />
            </div>
        </div>
    );
}
