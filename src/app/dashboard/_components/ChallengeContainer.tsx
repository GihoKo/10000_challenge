import { CHALLENGE_MOCKDATA } from "@/mocks";
import Challenge from "./Challenge";

export default function ChallengeContainer() {
    return (
        <div className="flex flex-col gap-2">
            {CHALLENGE_MOCKDATA.map((challenge) => (
                <Challenge key={challenge.id} challenge={challenge} />
            ))}
        </div>
    );
}
