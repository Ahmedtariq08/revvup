"use client";
import { SignInSchema, SignInUser } from "@/types/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    ClosedEyeIcon,
    CrossIcon,
    EmailIcon,
    GoogleIcon,
    LockIcon,
    OpenEyeIcon,
} from "../common/icons";
import { TITLE } from "@/constants/global";
import { useState } from "react";
import { toast } from "sonner";

const AuthDialogId = "my_modal_2";
export const openAuthDialog = () => {
    const modal = document.getElementById(AuthDialogId) as HTMLDialogElement | null;
    if (modal instanceof HTMLDialogElement) {
        modal.showModal();
    }
};

export const closeAuthDialog = () => {
    const modal = document.getElementById(AuthDialogId) as HTMLDialogElement | null;
    if (modal instanceof HTMLDialogElement) {
        modal.close();
    }
};

export const AuthDialog = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInUser>({
        resolver: zodResolver(SignInSchema),
    });

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data: SignInUser) => {
        console.log(data);
        // Handle form submission here
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign-in here
    };

    return (
        <div>
            <dialog
                id={AuthDialogId}
                className="modal modal-bottom sm:modal-middle"
                onClick={closeAuthDialog}
            >
                <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                    <form method="dialog"></form>

                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex justify-between items-center w-full mb-4">
                                <h2 className="card-title text-2xl font-bold mb-4">
                                    Welcome to{" "}
                                    <span className="text-accent">{TITLE}!</span>
                                </h2>
                                <button
                                    className="btn btn-sm absolute right-2 top-2"
                                    onClick={closeAuthDialog}
                                >
                                    <span> X</span>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="input input-bordered border-r-0 flex items-center gap-2">
                                        <EmailIcon />
                                        <input
                                            type="email"
                                            id="email"
                                            {...register("email")}
                                            autoComplete="email"
                                            placeholder="Email"
                                        />
                                    </label>
                                    {errors.email && (
                                        <span className="text-error text-sm mt-1">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </div>
                                <div className="relative flex items-center w-full mt-4">
                                    <label className="input input-bordered flex items-center gap-2 w-full">
                                        <LockIcon />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            {...register("password")}
                                            autoComplete="current-password"
                                            placeholder="********"
                                            className="w-full focus:outline-none"
                                        />
                                    </label>
                                    <button
                                        type="button"
                                        className="absolute right-3 btn btn-sm btn-ghost"
                                        onClick={() =>
                                            setShowPassword((prev) => {
                                                return !prev;
                                            })
                                        }
                                    >
                                        {showPassword ? (
                                            <ClosedEyeIcon />
                                        ) : (
                                            <OpenEyeIcon />
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <span className="text-error text-sm mt-1">
                                        {errors.password.message}
                                    </span>
                                )}
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-secondary">
                                        Sign In
                                    </button>
                                </div>
                            </form>

                            <div className="divider">OR</div>
                            <button
                                onClick={handleGoogleSignIn}
                                className="btn btn-outline gap-2"
                            >
                                <GoogleIcon />
                                Sign in with Google
                            </button>
                            <div className="text-center mt-4">
                                <p className="text-sm">
                                    Don't have an account?{" "}
                                    <a
                                        href="/signup"
                                        className="text-primary hover:underline"
                                    >
                                        Sign up
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};
