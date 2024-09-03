import Link from "next/link";

export default function Home() {
    return (
        <>
            <Link href={"/signIn"}>Sign In</Link>
            <Link href={"/signUp"}>Sign Up</Link>
            <Link href={"/dashboard"}>Dashboard</Link>
        </>
    );
}
