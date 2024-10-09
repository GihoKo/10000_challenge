"use client";

import useExpenseContainer from "./ExpenseContainer.hook";
import Expense from "./Expense";
import { ExpenseData } from "@/types/expense";
import EditExpenseModal from "./EditExpenseModal";

export default function ExpenseContainer() {
    const {
        expenses,
        isModalOpen,
        modalExpenseId,
        updateExpense,
        deleteExpense,
        handleClickExpense,
        handleModalClose,
    } = useExpenseContainer();

    return (
        <div>
            <ul className="flex flex-col gap-2">
                {expenses.map((expense: ExpenseData) => (
                    <Expense
                        key={expense.id}
                        expense={expense}
                        onClick={handleClickExpense}
                    />
                ))}
            </ul>
            {isModalOpen && (
                <EditExpenseModal
                    modalExpenseId={modalExpenseId}
                    updateExpense={updateExpense}
                    deleteExpense={deleteExpense}
                    handleModalClose={handleModalClose}
                />
            )}
        </div>
    );
}
