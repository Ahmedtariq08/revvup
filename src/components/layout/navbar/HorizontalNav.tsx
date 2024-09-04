import { SideBarIcon, WheelIcon } from "@/components/common/icons";
import { TITLE } from "@/constants/global";
import { NavElements } from "@/constants/navigation";
import { NavButtons } from "./NavButtons";
import { NavMenu } from "./NavMenu";

export const HorizontalNav = () => {
    return (
        <div className="navbar bg-base-200 shadow-md pl-3">
            <div className="flex-none lg:hidden">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                >
                    <SideBarIcon />
                </label>
            </div>

            <div className="navbar-start">
                <WheelIcon width={30} height={30} classes="hidden lg:inline" />
                <span className="text-2xl font-bold text-center ml-3 text-accent">
                    <strong>{TITLE}</strong>
                </span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <NavMenu
                    navElements={NavElements}
                    showIcons={false}
                    className="menu menu-horizontal px-1"
                />
            </div>
            <div className="navbar-end">
                <NavButtons />
            </div>
        </div>
    );
};
