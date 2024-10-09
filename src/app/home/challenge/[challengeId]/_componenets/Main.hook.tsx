import { deleteChallenge, getChallengeById } from "@/apis/services/challenge";
import { getExpensesByChallengeDuration } from "@/apis/services/expense";
import { ChallengeResponse } from "@/types/challenge";
import { ExpenseData } from "@/types/expense";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useMain() {
    const { challengeId } = useParams();
    const router = useRouter();

    const [challenge, setChallenge] = useState<ChallengeResponse>();
    const [expenses, setExpenses] = useState<ExpenseData[]>([]);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleDeleteModalClose = () => {
        setIsDeleteModalOpen(false);
    };

    const handleDeleteModalOpen = () => {
        setIsDeleteModalOpen(true);
    };

    const handleDeleteChallenge = () => {
        deleteChallenge({ challengeId })
            .then(() => {
                router.push("/home");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getChallengeById({
            challengeId,
        })
            .then((challenge) => {
                setChallenge(challenge);

                return challenge;
            })
            .then((challenge) => {
                getExpensesByChallengeDuration({
                    challenge,
                })
                    .then((expenses) => {
                        setExpenses(expenses);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    }, [challengeId]);

    return {
        challenge,
        expenses,
        isDeleteModalOpen,
        handleDeleteModalClose,
        handleDeleteModalOpen,
        handleDeleteChallenge,
    };
}
