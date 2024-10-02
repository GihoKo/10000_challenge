import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Link href={"/signIn"}>Sign In</Link>
            <Link href={"/signUp"}>Sign Up</Link>
            <Link href={"/home"}>Home</Link>
            <Link href={"/expenses"}>Expenses</Link>
            <Link href={"/expenses/detail"}>Detail</Link>
        </div>
    );
}
