import { useForm } from "react-hook-form";

export default function useSignInForm() {
    const { register, control } = useForm();

    return { register, control };
}
