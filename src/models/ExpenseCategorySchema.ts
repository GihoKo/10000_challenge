import { Schema, model, models } from "mongoose";

const ExpenseCategorySchema = new Schema(
    {
        name: {
            type: String,
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

const ExpenseCategoryModel =
    models.ExpenseCategory || model("ExpenseCategory", ExpenseCategorySchema);

export default ExpenseCategoryModel;
