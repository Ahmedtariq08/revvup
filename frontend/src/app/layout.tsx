import ReduxProvider from "@/store/redux-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Wheels & Deals",
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
                <body className={`${inter.className} app-container`}>{children}</body>
            </ReduxProvider>
        </html>
    );
}
