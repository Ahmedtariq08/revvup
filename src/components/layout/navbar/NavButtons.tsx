"use client";

import { openSignInDialog } from "@/components/auth/SignInDialog";
import { ThemeIcon, SignInIcon } from "@/components/common/icons";
import { useAuth } from "@/hooks/useAuth";
import { ThemesWithLabel } from "@/constants/themes";
import { useState, useRef, useEffect } from "react";
import { ProfileMenu } from "./ProfileMenu";
import Link from "next/link";
import { Routes } from "@/constants/navigation";

export const NavButtons = () => {
    const { user, loading } = useAuth();

    const themeChanged = (theme: string) => {
        document.documentElement.setAttribute("data-theme", theme);
    };

    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
    const themeMenuRef = useRef<HTMLLIElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            themeMenuRef.current &&
            !themeMenuRef.current.contains(event.target as Node)
        ) {
            setIsThemeMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <ul className="menu menu-horizontal">
            <li className="justify-around" ref={themeMenuRef}>
                <details
                    open={isThemeMenuOpen}
                    title="Theme"
                    onToggle={(e) => setIsThemeMenuOpen(e.currentTarget.open)}
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
                                        setIsThemeMenuOpen(false);
                                    }}
                                >
                                    {theme.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </details>
            </li>
            {loading ? (
                <span className="loading loading-bars loading-sm"></span>
            ) : user != null ? (
                <ProfileMenu />
            ) : (
                <li>
                    <a href={Routes.SignIn} className="btn btn-ghost" title="Sign In">
                        {/* <button title="Sign In" className="btn btn-ghost"> */}
                        <SignInIcon />
                        <span className="hidden lg:inline">Sign in</span>
                        {/* </button> */}
                    </a>
                </li>
            )}
        </ul>
    );
};
