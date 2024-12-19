import { Schema, model, models } from "mongoose";

const ExpenseSchema = new Schema(
    {
        date: {
            type: Date,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        category_id: {
            type: Schema.Types.ObjectId,
            ref: "ExpenseCategory",
        },
    },
    {
        timestamps: true,
    }
);

const ExpenseModel = models.Expense || model("Expense", ExpenseSchema);

export default ExpenseModel;
