import mongoose from "mongoose";

const DB_URI = process.env.NEXT_PUBLIC_MONGODB_URL;

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        return true;
    }

    if (!DB_URI) {
        throw new Error("DB_URI is not set");
    }

    try {
        await mongoose.connect(DB_URI);
        console.log("DB connected");
        return true;
    } catch (error) {
        console.error(error);
    }
};

export default connectDB;
