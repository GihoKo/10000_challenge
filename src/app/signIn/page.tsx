import Header from "@/components/sign/Header";
import Logo from "@/components/sign/Logo";
import SignInForm from "@/components/sign/SignInForm";
import NavigateSignUpLink from "./_components/NavigateSignUpLink";
import PageTransition from "@/components/animated/PageTransition";

export default function SignIn() {
    return (
        <PageTransition direction="up">
            <div className="h-screen flex flex-col justify-center items-center gap-6 px-3">
                <div className="w-full flex-col">
                    <Logo />
                    <Header />
                    <SignInForm />
                    <NavigateSignUpLink />
                </div>
            </div>
        </PageTransition>
    );
}
