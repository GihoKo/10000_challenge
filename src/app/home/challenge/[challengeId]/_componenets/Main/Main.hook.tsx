import { getChallengeById } from "@/apis/services/challenge";
import { getExpensesByChallengeDuration } from "@/apis/services/expense";
import useModalStore from "@/stores/modalStore";
import { ChallengeResponse } from "@/types/challenge";
import { ExpenseData } from "@/types/expense";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DeleteChallengeModal from "../DeleteChallengeModal/DeleteChallengeModal";

export default function useMain() {
    const { challengeId } = useParams();
    const setIsModalOpen = useModalStore.getState().setIsModalOpen;

    const [challenge, setChallenge] = useState<ChallengeResponse>();
    const [expenses, setExpenses] = useState<ExpenseData[]>([]);

    const handleDeleteChallengeModalOpen = () => {
        setIsModalOpen(<DeleteChallengeModal />);
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
        handleDeleteChallengeModalOpen,
    };
}
