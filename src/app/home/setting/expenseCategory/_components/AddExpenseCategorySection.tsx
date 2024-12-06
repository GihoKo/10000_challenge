import ConfirmButton from "@/components/button/ConfirmButton";
import { AddExpenseCategorySectionProps } from "./AddExpenseCategorySection.type";
import useAddExpenseCategorySection from "./AddExpenseCategorySection.hook";

export default function AddExpenseCategorySection({
    expenseCategoriesDispatch,
}: AddExpenseCategorySectionProps) {
    const {
        newExpenseCategoryInputRef,
        handleAddCategoryModalOpenButtonClick,
    } = useAddExpenseCategorySection({
        expenseCategoriesDispatch,
    });

    return (
        <section className="flex justify-between items-center gap-2">
            <input
                className="border border-gray-300 flex-1 rounded-lg p-2"
                type="text"
                placeholder="새로운 카테고리 "
                ref={newExpenseCategoryInputRef}
            />
            <ConfirmButton
                text="추가"
                width="w-auto"
                onClick={handleAddCategoryModalOpenButtonClick}
            />
        </section>
    );
}
