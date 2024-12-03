import AnimatedPage from "@/components/animated/AnimatedPage";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col py-8 px-4">
            <AnimatedPage>{children}</AnimatedPage>
        </div>
    );
}
