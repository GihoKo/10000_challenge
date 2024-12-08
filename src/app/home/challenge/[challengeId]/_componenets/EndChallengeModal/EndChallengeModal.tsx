import ConfirmButton from "@/components/button/ConfirmButton";
import NagativeButton from "@/components/button/NagativeButton";
import ModalDescription from "@/components/Modal/ModalDescription";
import ModalForm from "@/components/Modal/ModalForm";
import ModalName from "@/components/Modal/ModalName";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import useEndChallengeModal from "./EndChallengeModal.hook";

export function EndChallengeModal() {
    const { handleClose, handleSubmit, handleEndChallengeButtonClick } =
        useEndChallengeModal();

    return (
        <ModalWrapper>
            <ModalName text="챌린지 종료" />

            <ModalDescription text="챌린지를 종료하시겠습니까?" />

            <ModalForm onSubmit={handleSubmit}>
                <ConfirmButton
                    text="챌린지 종료하기"
                    onClick={handleEndChallengeButtonClick}
                />
                <NagativeButton text="취소" onClick={handleClose} />
            </ModalForm>
        </ModalWrapper>
    );
}
