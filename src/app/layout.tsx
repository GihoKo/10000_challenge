import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://10000-challenge.vercel.app";

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL), // Metadata을 기반으로 og태그의 image를 생성하려면 metadataBase를 설정해야 한다.
    title: "만원 챌린지",
    description: "만원 챌린지로 소비 습관을 바꿔보세요.",
    robots: "follow, index",
    openGraph: {
        siteName: "만원 챌린지",
        locale: "ko_KR",
        title: "클릭시 바로 이동합니다!",
        description: "만원 챌린지로 소비 습관을 바꿔보세요.",
        type: "website",
        url: BASE_URL,
        images: [
            {
                url: "/logo512.png", // public 폴더를 기준으로 한다.
                alt: "로고 이미지",
                type: "image/png",
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@giho7427",
        creator: "@giho7427",
        title: "만원 챌린지",
        description: "만원 챌린지로 소비 습관을 바꿔보세요.",
        images: [
            {
                url: "/logo512.png",
                alt: "로고 이미지",
                type: "image/png",
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <link rel="manifest" href="/manifest.json"></link>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
