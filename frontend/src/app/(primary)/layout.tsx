import { SignInDialog } from "@/components/auth/SignInDialog";
import { SignUpDialog } from "@/components/auth/SignUpDialog";
import NavBarWithDrawer from "@/components/layout/navbar/NavBarWithDrawer";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen mx-auto">
            <NavBarWithDrawer>{children}</NavBarWithDrawer>
            <SignInDialog />
            <SignUpDialog />
        </div>
    );
}
