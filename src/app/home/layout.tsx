import AnimatedPage from "@/components/animated/animatedPage";
import NavigationBar from "./_components/NavigationBar/NavigationBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="flex flex-col pt-8 px-4 pb-60">
                <AnimatedPage>{children}</AnimatedPage>
            </div>
            <NavigationBar />
        </div>
    );
}
