import AnimatedPage from "@/components/animated/animatedPage";
import NavigationBar from "../_components/NavigationBar/NavigationBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <AnimatedPage>{children}</AnimatedPage>
        </div>
    );
}
