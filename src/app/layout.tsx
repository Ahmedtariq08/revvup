import { TITLE } from "@/constants/global";
import ReduxProvider from "@/store/redux-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: TITLE,
    description: "Developed by Ahmed",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="cupcake">
            <ReduxProvider>
                <body className={`${inter.className} app-container`}>
                    {children}
                    <Toaster richColors />
                </body>
            </ReduxProvider>
        </html>
    );
}
