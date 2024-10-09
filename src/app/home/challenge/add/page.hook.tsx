import supabaseClient from "@/supabase/client";
import createStartDate from "@/utils/createStartDate";
import formatDate from "@/utils/formatDate";
import { useState } from "react";
import { Values } from "./page.type";
import { useRouter } from "next/navigation";

export default function useAddPage() {
    const router = useRouter();

    const [values, setValues] = useState<Values>({
        name: "",
        resolution: "",
        dailySaving: 0,
        goalDate: "YYYY-MM-DD",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        addChallenge();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedDate = formatDate(e.target.value);

        setValues({ ...values, [e.target.name]: formattedDate });
    };

    const addChallenge = async () => {
        const challenge = {
            name: values.name,
            resolution: values.resolution,
            daily_saving: values.dailySaving,
            start_date: createStartDate(),
            goal_date: values.goalDate,
            user_id: process.env.NEXT_PUBLIC_USER_ID,
        };

        const { data, error } = await supabaseClient
            .from("challenge")
            .insert(challenge)
            .select();

        if (error) {
            console.log(error);
        }

        router.push("/home");
    };

    return { values, handleSubmit, handleChange, handleDateChange };
}
