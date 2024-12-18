import { Schema, model, models } from "mongoose";

const PostSchema = new Schema(
    {
        msg: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const PostModel = models.post || model("post", PostSchema);

export default PostModel;
