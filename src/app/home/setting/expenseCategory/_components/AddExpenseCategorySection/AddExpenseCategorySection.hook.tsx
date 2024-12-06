import useModalStore from "@/stores/modalStore";
import AddExpenseCategoryModal from "../AddExpenseCategoryModal/AddExpenseCategoryModal";
import { useRef } from "react";
import { UseAddExpenseCategorySectionProps } from "./AddExpenseCategorySection.type";

export default function useAddExpenseCategorySection({
    expenseCategoriesDispatch,
}: UseAddExpenseCategorySectionProps) {
    const { setIsModalOpen } = useModalStore();

    const newExpenseCategoryInputRef = useRef<HTMLInputElement>(null);

    const handleAddCategoryModalOpenButtonClick = () => {
        if (!newExpenseCategoryInputRef.current) return;

        setIsModalOpen(
            <AddExpenseCategoryModal
                newExpenseCategoryInputRef={newExpenseCategoryInputRef}
                expenseCategoriesDispatch={expenseCategoriesDispatch}
            />
        );
    };

    return {
        newExpenseCategoryInputRef,
        handleAddCategoryModalOpenButtonClick,
    };
}
