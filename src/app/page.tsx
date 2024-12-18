"use client";

import DefaultNavigateLink from "@/components/Link/DefaultNavigateLink";
import ImageWrapper from "@/components/ImageWrapper";
import logoImage from "@/images/logo.png";
import { useEffect } from "react";

export default function Home() {
    const apiCallTest = async () => {
        const response = await fetch("http://localhost:3000/api/test", {
            method: "GET",
        });
        const data = await response.json();
        console.log(data);
    };

    useEffect(() => {
        apiCallTest();
    }, []);

    return (
        <div className="h-screen flex flex-col gap-4 justify-center items-center">
            <ImageWrapper
                src={logoImage}
                width={144}
                height={144}
                alt="로고 이미지"
            />

            <DefaultNavigateLink
                href={"/signIn"}
                text="시작하기"
                width="w-24"
            />
        </div>
    );
}
