import { Values } from "../page.type";

export interface AmountInputProps {
    values: Values;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
