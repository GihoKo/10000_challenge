import { Schema, model, models } from "mongoose";

const ChallengeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        resolution: { type: String },
        daily_saving: { type: Number },
        goal_date: { type: Date },
        start_date: { type: Date },
        user_id: { type: Schema.Types.ObjectId, ref: "User" },
        isEnded: { type: Boolean, default: false },
        expenses: [
            {
                type: Schema.Types.ObjectId,
                ref: "Expense",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const ChallengeModel = models.Challenge || model("Challenge", ChallengeSchema);

export default ChallengeModel;
