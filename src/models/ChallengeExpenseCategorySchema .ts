import { Schema, model, models } from "mongoose";

const ChallengeExpenseCategorySchema = new Schema(
    {
        challenge_id: {
            type: Schema.Types.ObjectId,
            ref: "Challenge",
            required: true,
        },
        expense_category_id: {
            type: Schema.Types.ObjectId,
            ref: "ExpenseCategory",
            required: true,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const ChallengeExpenseCategoryModel =
    models.ChallengeExpenseCategory ||
    model("ChallengeExpenseCategory", ChallengeExpenseCategorySchema);

export default ChallengeExpenseCategoryModel;
