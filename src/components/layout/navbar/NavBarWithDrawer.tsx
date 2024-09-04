import { TITLE } from "@/constants/global";
import { NavElements } from "@/constants/navigation";
import { WheelIcon } from "../../common/icons";
import { NavMenu } from "./NavMenu";
import { HorizontalNav } from "./HorizontalNav";

/* This is main nav component */
const NavBarWithDrawer = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <HorizontalNav />
                {children}
            </div>
            <div className="drawer-side shadow-md">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div className="menu bg-base-200 min-h-full w-70 p-4">
                    <div className="flex items-center ">
                        <button className="btn btn-ghost text-xl">
                            <WheelIcon width={30} height={30} />
                        </button>
                        <span className="text-2xl font-bold text-center text-accent">
                            <strong>{TITLE}</strong>
                        </span>
                    </div>
                    <hr className="border-t border-neutral" />
                    <div className="sidebar w-64 h-full shadow-md rounded-lg mt-5">
                        <NavMenu
                            navElements={NavElements}
                            showIcons={true}
                            className="menu p-4 space-y-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBarWithDrawer;
