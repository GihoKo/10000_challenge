import AnimatedPage from "@/components/animated/animatedPage";
import useRerenderCountStore from "@/stores/rerenderCountStore";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <AnimatedPage>{children}</AnimatedPage>
        </div>
    );
}
