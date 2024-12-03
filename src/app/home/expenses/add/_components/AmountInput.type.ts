import { Values } from "./Main.type";

export interface AmountInputProps {
    values: Values;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
