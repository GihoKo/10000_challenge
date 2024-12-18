import mongoose from "mongoose";

const { NEXT_PUBLIC_MONGO_DB_URL } = process.env;
const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(
            NEXT_PUBLIC_MONGO_DB_URL as string
        );
        if (connection.readyState === 1) {
            return Promise.resolve(true);
        }
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};

export default connectDB;
