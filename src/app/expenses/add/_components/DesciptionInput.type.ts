import { Values } from "./Main.type";

export interface DesciptionInputProps {
    values: Values;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
