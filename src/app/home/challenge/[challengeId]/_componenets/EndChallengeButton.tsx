import ConfirmButton from "@/components/button/ConfirmButton";

export default function EndChallengeButton() {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-xl font-medium text-blue-500">
                챌린지가 끝났어요!
            </span>
            <ConfirmButton type="button" text="챌린지 종료하기" />
        </div>
    );
}
