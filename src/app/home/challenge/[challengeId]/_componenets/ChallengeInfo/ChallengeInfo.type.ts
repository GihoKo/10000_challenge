import { ChallengeResponse } from "@/types/challenge";
import { ExpenseData } from "@/types/expense";

export interface ChallengeInfoProps {
    challenge: ChallengeResponse | undefined;
    expenses: ExpenseData[];
}

export interface UseChallengeInfoProps {
    challenge: ChallengeResponse | undefined;
    expenses: ExpenseData[];
}
