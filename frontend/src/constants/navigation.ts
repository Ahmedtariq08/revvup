import {
    AboutIcon,
    BuyCarIcon,
    CarMaintenanceIcon,
    FaqIcon,
    SellCarIcon,
} from "@/components/common/icons";

export interface NavElement {
    label: string;
    route: string;
    nestedElements?: NavElement[];
    icon?: React.ComponentType<any>;
}

export const NavElements: NavElement[] = [
    { label: "Buy", route: "buy", icon: BuyCarIcon },
    { label: "Sell", route: "sell", icon: SellCarIcon },
    {
        label: "Services",
        route: "services",

        icon: CarMaintenanceIcon,
        nestedElements: [
            { label: "Insurance", route: "insurance" },
            { label: "Dealership", route: "dealership" },
            { label: "Auto Workshop", route: "workshop" },
        ],
    },
    { label: "FAQ", route: "faq", icon: FaqIcon },
    { label: "About", route: "about", icon: AboutIcon },
];
