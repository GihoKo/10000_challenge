"use client";

import AnimatedLinkPage from "@/components/animated/AnimatedLinkPage";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <AnimatedLinkPage>{children}</AnimatedLinkPage>
        </div>
    );
}
