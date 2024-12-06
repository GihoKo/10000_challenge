import ImageWrapper from "@/components/ImageWrapper";
import deleteSvg from "@/images/svg/delete-black.svg";
import editSvg from "@/images/svg/edit-black.svg";
import { ExpenseCategoryProps } from "./ExpenseCategory.type";

export default function ExpenseCategory({ category }: ExpenseCategoryProps) {
    return (
        <li
            key={category.id}
            className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
        >
            <span className="text-base">{category.name}</span>

            <div className="flex gap-2">
                <button
                    data-name={category.name}
                    data-id={category.id}
                    data-type="update"
                    className="border border-gray-300 rounded-lg p-2 bg-white"
                    type="button"
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
                    data-type="delete"
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
