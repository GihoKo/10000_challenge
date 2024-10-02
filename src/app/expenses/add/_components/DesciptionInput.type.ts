import { Values } from "../page.type";

export interface DesciptionInputProps {
    values: Values;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
