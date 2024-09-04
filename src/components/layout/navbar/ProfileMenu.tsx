"use client";
import { signOutFb } from "@/actions/auth.actions";
import { LogoutIcon, ProfileIcon } from "@/components/common/icons";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export const ProfileMenu = () => {
    const { user, loading } = useAuth();
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const profileMenuRef = useRef<HTMLLIElement>(null);

    const handleProfileMenuOutside = (event: MouseEvent) => {
        if (
            profileMenuRef.current &&
            !profileMenuRef.current.contains(event.target as Node)
        ) {
            setIsProfileMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleProfileMenuOutside);
        return () => {
            document.removeEventListener("mousedown", handleProfileMenuOutside);
        };
    }, []);

    const clickLogout = async () => {
        const response = await signOutFb();
        if (response.isSuccess) {
            toast.success("User logged out.");
        } else {
            toast.error(`Unable to logout. ${response.error?.message}`);
        }
    };

    return (
        <li className="justify-around" ref={profileMenuRef}>
            <details
                open={isProfileMenuOpen}
                onToggle={(e) => setIsProfileMenuOpen(e.currentTarget.open)}
            >
                <summary>
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                            <img
                                width={20}
                                height={20}
                                src={user?.photoURL ?? "/icons/user3.png"}
                            />
                        </div>
                    </div>
                    <span className="hidden lg:inline ml-1">
                        {user?.displayName ?? ""}
                    </span>
                </summary>
                <ul className="bg-base-100  p-2">
                    <li key="#myProfile">
                        <button
                            className="btn btn-ghost"
                            onClick={(event) => {
                                console.log("Open my profile");
                            }}
                        >
                            <ProfileIcon width={15} height={15} />
                            <span className="hidden lg:inline">Profile</span>
                        </button>
                    </li>
                    <li key="#logout">
                        <button onClick={clickLogout}>
                            <LogoutIcon width={20} height={20} />
                            <span className="hidden lg:inline">Logout</span>
                        </button>
                    </li>
                </ul>
            </details>
        </li>
    );
};
