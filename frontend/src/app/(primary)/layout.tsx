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
            <NavBarWithDrawer>
                <div className="mt-3 mb-3 ml-5 mr-5">{children}</div>
            </NavBarWithDrawer>
            <SignInDialog />
            <SignUpDialog />
        </div>
    );
}
