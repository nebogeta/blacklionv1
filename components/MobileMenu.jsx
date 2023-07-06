'use client';

import {Button} from "./ui/Button";
import {MenuIcon} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

import {Loader2} from "lucide-react";
import {useRouter} from "next/navigation";
import {toast} from "./ui/toast";
import {getServerSession} from "next-auth";
import * as React from "react";
import {authOptions} from "@/lib/auth";


const MobileMenu = async () => {
    const session = await getServerSession(authOptions);

    const router = useRouter();

    const dashboard = () => {
        try {

            router.push("/dashboard");
        } catch (error) {
            toast({
                title: "Something went wrong creating expense",
                message: "Please try again later",
                type: "error",
            });
        }
    };

    const login = () => {
        try {

            router.push("/login");
        } catch (error) {
            toast({
                title: "Something went wrong creating expense",
                message: "Please try again later",
                type: "error",
            });
        }
    };

    const documentation = () => {
        try {

            router.push("/documentation");
        } catch (error) {
            toast({
                title: "Something went wrong creating expense",
                message: "Please try again later",
                type: "error",
            });
        }
    };

    const home = () => {
        try {

            router.push("/");
        } catch (error) {
            toast({
                title: "Something went wrong creating expense",
                message: "Please try again later",
                type: "error",
            });
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild
            >
                <Button variant="ghost" size="sm">
                    <MenuIcon
                        className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100"/>
                    <span className="sr-only">Burger Menu</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" forceMount>
                {session ? (
                    <>
                        <DropdownMenuItem onClick={dashboard}>Dashboard</DropdownMenuItem>
                        <DropdownMenuItem onClick={documentation}>Documentation</DropdownMenuItem>
                        <DropdownMenuItem onClick={home}>Sign Out</DropdownMenuItem>
                    </>
                ) : (
                    <DropdownMenuItem onClick={login}>Login</DropdownMenuItem>

                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default MobileMenu;
