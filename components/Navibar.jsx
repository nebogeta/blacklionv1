import React from "react";
import Image from "next/image";
import Link from "next/link";
import {ThemeToggle} from "@/components/ThemeToggle";
import {buttonVariants} from "@/components/ui/Button";
import SignInButton from "@/components/ui/SignInButton";
import SignOutButton from "@/components/ui/SignOutButton";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";



const Navbar = async () => {
    const session = await getServerSession(authOptions);


    return (
        <div
            className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
            <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
                <Link href="/" className={buttonVariants({variant: "link"})}>
                    Black Lion Expense v1.0
                </Link>

                <div className="md:hidden">
                    <ThemeToggle/>
                </div>

                <div className="hidden md:flex gap-4">
                    <ThemeToggle/>
                    <Link
                        href="/documentation"
                        className={buttonVariants({variant: "ghost"})}
                    >
                        Documentation
                    </Link>
                    {session?.user ? (
                        <>
                            <Link
                                className={buttonVariants({variant: "ghost"})}
                                href="/dashboard"
                            >
                                Dashboard
                            </Link>
                            <SignOutButton/>
                            <Link href="/dashboard">
                                <Image
                                    src={session?.user.image}
                                    width={37}
                                    height={37}
                                    className="rounded-full"
                                    alt="profile"
                                />
                            </Link>
                        </>
                    ) : (
                        <SignInButton/>
                    )}
                </div>


            </div>
        </div>
    );
};

export default Navbar;




