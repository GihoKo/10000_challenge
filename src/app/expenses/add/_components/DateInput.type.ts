import { Values } from "./Main.type";

export interface DateInputProps {
    values: Values;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
