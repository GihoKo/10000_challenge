import AnimatedPage from "@/components/animated/AnimatedPage";

export default function Layout({ children }: { children: React.ReactNode }) {
    return <AnimatedPage>{children}</AnimatedPage>;
}
