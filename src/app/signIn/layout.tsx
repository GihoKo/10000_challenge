import AnimatedPage from "@/components/animated/animatedPage";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <AnimatedPage>{children}</AnimatedPage>;
}
