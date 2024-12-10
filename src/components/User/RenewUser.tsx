"use client";

import { renewUser } from "@/apis/services/auth";
import { useEffect } from "react";

export default function RenewUser() {
    useEffect(() => {
        renewUser()
            .then(() => {})
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return null;
}
