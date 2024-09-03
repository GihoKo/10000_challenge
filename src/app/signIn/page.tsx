import Header from "@/components/sign/Header";
import Logo from "@/components/sign/Logo";
import SignInForm from "@/components/sign/SignInForm";

export default function SignIn() {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-6 px-3">
            <div className="w-full flex-col">
                <Logo />
                <Header />
                <SignInForm />
            </div>
        </div>
    );
}
