import {
    AboutIcon,
    BuyCarIcon,
    CarMaintenanceIcon,
    FaqIcon,
    SellCarIcon,
} from "@/components/common/icons";

/* Route paths to used across app. Add all routes here */
export enum Routes {
    Main = "/",
    SignIn = "/sign-in",
    SignUp = "/sign-up",
    Buy = "/buy",
    Sell = "/sell",
    Services = "/services",
    Insurace = `${Routes.Services}/insurance`,
    Dealership = `${Routes.Services}/dealership`,
    AutoWorkshop = `${Routes.Services}/workshop`,
    FAQ = "/faq",
    About = "/about",
}

export interface NavElement {
    label: string;
    route: string;
    nestedElements?: NavElement[];
    icon?: React.ComponentType<any>;
}

export const NavElements: NavElement[] = [
    { label: "Buy", route: Routes.Buy, icon: BuyCarIcon },
    { label: "Sell", route: Routes.Sell, icon: SellCarIcon },
    {
        label: "Services",
        route: Routes.Services,
        icon: CarMaintenanceIcon,
        nestedElements: [
            { label: "Insurance", route: Routes.Insurace },
            { label: "Dealership", route: Routes.Dealership },
            { label: "Auto Workshop", route: Routes.AutoWorkshop },
        ],
    },
    { label: "FAQ", route: Routes.FAQ, icon: FaqIcon },
    { label: "About", route: Routes.About, icon: AboutIcon },
];
