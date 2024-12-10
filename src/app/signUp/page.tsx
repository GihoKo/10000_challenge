import Header from "@/components/sign/Header";
import Logo from "@/components/sign/Logo";
import SignUpForm from "@/components/sign/SignUpForm";
import NavigateSignInLink from "./_components/NavigateSignInLink";
import PageTransition from "@/components/animated/PageTransition";

export default function SignUp() {
    return (
        <PageTransition direction="up">
            <div className="h-screen flex flex-col justify-center items-center gap-6 px-3">
                <div className="w-full flex-col">
                    <Logo />
                    <Header />
                    <SignUpForm />
                    <NavigateSignInLink />
                </div>
            </div>
        </PageTransition>
    );
}
