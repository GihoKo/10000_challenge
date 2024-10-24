import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "만원 챌린지",
    description: "만원 챌린지로 소비 습관을 바꿔보세요.",
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
