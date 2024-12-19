import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;

const verifyToken = (token: string) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        return { valid: true, decoded };
    } catch (error) {
        return { valid: false, error };
    }
};

export default verifyToken;
