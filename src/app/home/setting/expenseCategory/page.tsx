"use client";

import ConfirmButton from "@/components/button/ConfirmButton";
import PageContentHeader from "@/components/Header/PageContentHeader";
import ImageWrapper from "@/components/ImageWrapper";
import { expenseCategoryMocks } from "@/mocks";
import deleteSvg from "@/images/svg/delete-black.svg";
import editSvg from "@/images/svg/edit-black.svg";
import useModalStore from "@/stores/modalStore";
import DeleteExpenseCategoryModal from "./_components/DeleteExpenseCategoryModal";

export default function ExpenseCategoryPage() {
    const { setIsModalOpen } = useModalStore();
    const handleAddCategoryModalOpenButtonClick = () => {
        alert("추가 버튼 클릭");
    };

    const handleUpdateCategoryModalOpenButtonClick = () => {
        alert("추가 버튼 클릭");
    };

    const handleDeleteCategoryModalOpenButtonClick = () => {
        setIsModalOpen(<DeleteExpenseCategoryModal />);
    };

    return (
        <div>
            <PageContentHeader text="소비 카테고리 설정" />

            <main className="flex flex-col gap-4">
                <div className="flex justify-between items-center gap-2">
                    <input
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        type="text"
                        placeholder="새로운 카테고리 "
                    />
                    <ConfirmButton
                        text="추가"
                        width="w-auto"
                        onClick={handleAddCategoryModalOpenButtonClick}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    {expenseCategoryMocks.map((category) => {
                        return (
                            <div
                                key={category.id}
                                className="flex justify-between items-center bg-gray-100 p-2 rounded-lg
                        "
                            >
                                <span className="text-base">
                                    {category.name}
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        className="border border-gray-300 rounded-lg p-2 bg-white"
                                        type="button"
                                        onClick={
                                            handleUpdateCategoryModalOpenButtonClick
                                        }
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
                                        onClick={
                                            handleDeleteCategoryModalOpenButtonClick
                                        }
                                    >
                                        <ImageWrapper
                                            src={deleteSvg}
                                            alt="삭제"
                                            width={20}
                                            height={20}
                                        />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
