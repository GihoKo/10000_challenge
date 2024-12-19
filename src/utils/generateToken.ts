import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;

// payload: token에 포함할 데이터, expiresIn: 토큰의 유효기간
const generateToken = (payload: object, expiresIn: string | number = 3600) => {
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn });
    return token;
};

export default generateToken;
