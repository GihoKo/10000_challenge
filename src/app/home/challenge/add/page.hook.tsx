import supabaseClient from "@/supabase/client";
import createStartDate from "@/utils/createStartDate";
import formatDate from "@/utils/formatDate";
import { useState } from "react";
import { Values } from "./page.type";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";

export default function useAddPage() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return { register, handleSubmit, onSubmit, errors, control };
}
