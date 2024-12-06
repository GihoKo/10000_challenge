import ImageWrapper from "@/components/ImageWrapper";
import deleteSvg from "@/images/svg/delete-black.svg";
import editSvg from "@/images/svg/edit-black.svg";
import { ExpenseCategory as ExpenseCategoryInterface } from "./Main.type";
import UpdateExpenseCategoryModal from "./UpdateExpenseCategoryModal";
import DeleteExpenseCategoryModal from "./DeleteExpenseCategoryModal";
import useModalStore from "@/stores/modalStore";
import { ExpenseCategoryAction } from "@/reducers/expenseCategoryReducer";

export interface ExpenseCategoryProps {
    category: ExpenseCategoryInterface;
    expenseCategoriesDispatch: React.Dispatch<ExpenseCategoryAction>;
}

export default function ExpenseCategory({
    category,
    expenseCategoriesDispatch,
}: ExpenseCategoryProps) {
    const { setIsModalOpen } = useModalStore();

    const handleUpdateCategoryModalOpenButtonClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        const currentExpenseCategoryName = e.currentTarget.dataset.name;
        const currentExpenseCategoryId = Number(e.currentTarget.dataset.id);

        if (!currentExpenseCategoryName || !currentExpenseCategoryId) return;

        const currentExpenseCategory = {
            id: currentExpenseCategoryId,
            name: currentExpenseCategoryName,
        };

        setIsModalOpen(
            <UpdateExpenseCategoryModal
                currentExpenseCategory={currentExpenseCategory}
                expenseCategoriesDispatch={expenseCategoriesDispatch}
            />
        );
    };

    const handleDeleteCategoryModalOpenButtonClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        const currentExpenseCategoryId = Number(e.currentTarget.dataset.id);

        if (!currentExpenseCategoryId) return;

        setIsModalOpen(
            <DeleteExpenseCategoryModal
                currentExpenseCategoryId={currentExpenseCategoryId}
                expenseCategoriesDispatch={expenseCategoriesDispatch}
            />
        );
    };

    return (
        <li
            key={category.id}
            className="flex justify-between items-center bg-gray-100 p-2 rounded-lg
"
        >
            <span className="text-base">{category.name}</span>
            <div className="flex gap-2">
                <button
                    data-name={category.name}
                    data-id={category.id}
                    className="border border-gray-300 rounded-lg p-2 bg-white"
                    type="button"
                    onClick={handleUpdateCategoryModalOpenButtonClick}
                >
                    <ImageWrapper
                        src={editSvg}
                        alt="수정"
                        width={20}
                        height={20}
                    />
                </button>
                <button
                    className="border border-gray-300  rounded-lg p-2 bg-white"
                    type="button"
                    data-id={category.id}
                    onClick={handleDeleteCategoryModalOpenButtonClick}
                >
                    <ImageWrapper
                        src={deleteSvg}
                        alt="삭제"
                        width={20}
                        height={20}
                    />
                </button>
            </div>
        </li>
    );
}
