import PageContentHeader from "@/components/Header/PageContentHeader";
import PreviousChallengesContainer from "./_components/PreviousChallengesContainer";

export default function PreviousChallenges() {
    return (
        <div className="flex flex-col gap-4">
            <PageContentHeader text="지난 챌린지 목록이에요." />
            <PreviousChallengesContainer />
        </div>
    );
}
