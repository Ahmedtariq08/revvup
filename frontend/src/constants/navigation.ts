import { BuyCarIcon, CarMaintenanceIcon, SellCarIcon } from "@/components/common/icons";

export interface NavElement {
    label: string;
    route: string;
    showInSidebar: boolean;
    nestedElements?: NavElement[];
    icon?: React.ComponentType<any>;
}

export const NavElements: NavElement[] = [
    { label: "Buy", route: "buy", showInSidebar: true, icon: BuyCarIcon },
    { label: "Sell", route: "sell", showInSidebar: true, icon: SellCarIcon },
    {
        label: "Services",
        route: "services",
        showInSidebar: true,
        icon: CarMaintenanceIcon,
        nestedElements: [
            { label: "Insurance", route: "insurance", showInSidebar: true },
            { label: "Dealership", route: "dealership", showInSidebar: true },
            { label: "Auto Workshop", route: "workshop", showInSidebar: true },
        ],
    },
    { label: "FAQ", route: "faq", showInSidebar: false },
    { label: "About", route: "about", showInSidebar: false },
];
