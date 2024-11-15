import Header from "@/components/sign/Header";
import Logo from "@/components/sign/Logo";
import SignUpForm from "@/components/sign/SignUpForm";
import NavigateSignInLink from "./_components/NavigateSignInLink";

export default function SignUp() {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-6 px-3">
            <div className="w-full flex-col">
                <Logo />
                <Header />
                <SignUpForm />
                <NavigateSignInLink />
            </div>
        </div>
    );
}
