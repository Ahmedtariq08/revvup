import NavBarWithDrawer from "@/components/layout/NavBar";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen mx-auto">
            <NavBarWithDrawer>{children}</NavBarWithDrawer>
        </div>
    );
}
