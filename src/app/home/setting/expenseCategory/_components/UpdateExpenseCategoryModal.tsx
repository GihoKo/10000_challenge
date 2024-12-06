import ConfirmButton from "@/components/button/ConfirmButton";
import NagativeButton from "@/components/button/NagativeButton";
import ModalForm from "@/components/Modal/ModalForm";
import ModalName from "@/components/Modal/ModalName";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import useModalStore from "@/stores/modalStore";
import { useEffect, useRef } from "react";

export default function UpdateExpenseCategoryModal() {
    const { closeModal } = useModalStore();

    const inputRef = useRef<HTMLInputElement>(null);

    const handleUpdateButtonClick = () => {
        alert("수정 버튼 클릭");
        closeModal();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!inputRef.current) return;
        inputRef.current.value = e.target.value;
    };

    const handleModalCloseButtonClick = () => {
        closeModal();
    };

    useEffect(() => {
        if (
            sessionStorage.getItem("currentExpenseCategory") &&
            inputRef.current
        ) {
            const currentExpenseCategory = JSON.parse(
                sessionStorage.getItem("currentExpenseCategory")!
            );

            inputRef.current.value = currentExpenseCategory;
        }
    }, []);

    return (
        <ModalWrapper>
            <ModalName text="소비 카테고리 수정" />

            <input
                ref={inputRef}
                value={inputRef.current?.value}
                onChange={handleInputChange}
                type="text"
                className="border border-gray-300 rounded-lg p-2"
            />

            <ModalForm onSubmit={() => {}}>
                <ConfirmButton text="수정" onClick={handleUpdateButtonClick} />
                <NagativeButton
                    text="닫기"
                    onClick={handleModalCloseButtonClick}
                />
            </ModalForm>
        </ModalWrapper>
    );
}
