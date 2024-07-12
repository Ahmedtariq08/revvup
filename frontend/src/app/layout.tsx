import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";
import { Inter } from "next/font/google";
import "./globals.css";
import Copyright from "@/components/Copyright";
import Notifications from "@/components/Notification";
import ReduxProvider from "@/store/redux-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Hi there!",
    description: "Developed by Ahmed",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <AppRouterCacheProvider>
                <ReduxProvider>
                    <ThemeProvider theme={theme}>
                        <body className={`${inter.className} app-container`}>
                            {children}
                            <footer className="footer">
                                <Copyright />
                            </footer>
                            <Notifications />
                        </body>
                    </ThemeProvider>
                </ReduxProvider>
            </AppRouterCacheProvider>
        </html>
    );
}
