import "@/styles/globals.css";
import {Inter} from "next/font/google";
import {cn} from "@/lib/utils";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navibar";
import {Toaster} from "@/ui/ToastComponent";
import ReduxProvider from "@/redux/provider";
import MobileMenu from "@/components/MobileMenu";


const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}) {
    return (
        <html
            lang="en"
            className={cn("bg-white text-slate-900 antialiased", inter.className)}
        >
        <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">

        <Providers>
            <Navbar/>
            <Toaster position="bottom-center"/>
            <MobileMenu/>
            <ReduxProvider>
                <main>{children}</main>
            </ReduxProvider>
        </Providers>

        {/* Allow more height for mobile menu on mobile */}
        <div className="h-40 md:hidden"/>
        </body>
        </html>
    );
}
