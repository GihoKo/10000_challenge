import Header from "./_components/Header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col py-8 px-4">
            <Header />
            {children}
        </div>
    );
}
