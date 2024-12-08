import AnimatedPage from "@/components/animated/animatedPage";
import useRerenderCountStore from "@/stores/rerenderCountStore";

export default function Layout({ children }: { children: React.ReactNode }) {
    const { incrementRerenderCount } = useRerenderCountStore.getState();
    incrementRerenderCount();

    return (
        <div>
            <AnimatedPage>{children}</AnimatedPage>
        </div>
    );
}
