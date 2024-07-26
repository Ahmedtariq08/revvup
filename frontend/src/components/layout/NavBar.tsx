"use client";
import { TITLE } from "@/constants/global";
import { NavElement, NavElements, Routes } from "@/constants/navigation";
import { ThemesWithLabel } from "@/theme/themes";
import { useEffect, useRef, useState } from "react";
import { SideBarIcon, SignInIcon, ThemeIcon, WheelIcon } from "../common/icons";

// TODO -
// 1. Dropdowns in nabar must close on clicking outside
// 2. Add icons for all other nav elements

interface NavMenuProps {
    navElements: NavElement[];
    showIcons: boolean;
    className: string;
}

const NavMenu: React.FC<NavMenuProps> = ({ navElements, showIcons, className }) => {
    const renderNavItem = (nav: NavElement, index: number) => {
        const IconComponent = nav.icon;
        return (
            <li key={`${nav.route}-${index}`}>
                {!nav.nestedElements ? (
                    <a href={nav.route}>
                        {IconComponent && (
                            <span>
                                <IconComponent />
                            </span>
                        )}
                        {nav.label}
                    </a>
                ) : (
                    <details>
                        <summary>
                            {IconComponent && (
                                <span>
                                    <IconComponent />
                                </span>
                            )}
                            {nav.label}
                        </summary>
                        <ul className="p-2">
                            {nav.nestedElements.map((el, idx) => renderNavItem(el, idx))}
                        </ul>
                    </details>
                )}
            </li>
        );
    };

    return (
        <ul className={className}>
            {navElements.map((nav, index) => renderNavItem(nav, index))}
        </ul>
    );
};

const NavBar = () => {
    const themeChanged = (theme: string) => {
        document.documentElement.setAttribute("data-theme", theme);
    };

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
                <ul className="menu menu-horizontal">
                    <li className="justify-around" ref={dropdownRef}>
                        <details
                            open={isOpen}
                            onToggle={(e) => setIsOpen(e.currentTarget.open)}
                        >
                            <summary>
                                <ThemeIcon />
                                <span className="hidden lg:inline">Theme</span>
                            </summary>
                            <ul className="bg-base-100  p-2">
                                {ThemesWithLabel.map((theme) => (
                                    <li key={theme.value}>
                                        <button
                                            data-set-theme={theme.value}
                                            data-act-class="ACTIVECLASS"
                                            onClick={(event) => {
                                                themeChanged(theme.value);
                                                setIsOpen(false);
                                            }}
                                        >
                                            {theme.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </li>

                    <li>
                        <a href={Routes.SignIn} className="btn btn-ghost">
                            <SignInIcon />
                            <span className="hidden lg:inline">Sign in</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const NavBarWithDrawer = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <NavBar />
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
