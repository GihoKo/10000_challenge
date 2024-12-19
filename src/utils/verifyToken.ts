import { JsonWebKeyInput, PublicKeyInput } from "crypto";
import jwt, { GetPublicKeyOrSecret, Secret } from "jsonwebtoken";

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;

interface DecodedToken {
    id: string;
    email: string;
    user_name: string;
}

interface VerifyTokenResult {
    valid: boolean;
    decoded?: DecodedToken;
    error?: Error;
}

const verifyToken = (token: string): VerifyTokenResult => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET as Secret) as DecodedToken;

        return { valid: true, decoded };
    } catch (error) {
        return { valid: false, error: error as Error };
    }
};

export default verifyToken;
