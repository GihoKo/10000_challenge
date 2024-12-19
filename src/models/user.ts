import { CallbackError, Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";

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

// 비밀번호 해싱 (사용자 생성 또는 업데이트 시)
UserSchema.pre("save", async function (next) {
    const user = this;

    // 사용자가 생성되거나 비밀번호 수정일 때만 해싱처리
    if (!user.isModified("password")) return next();

    try {
        // 비밀번호 해싱
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error: unknown) {
        next(error as CallbackError);
    }
});

// 비밀번호 비교 메서드
UserSchema.methods.comparePassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
};

const UserModel = models.User || model("User", UserSchema);

export default UserModel;
