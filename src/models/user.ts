import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        user_name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const UserModel = models.User || model("User", UserSchema);

export default UserModel;
