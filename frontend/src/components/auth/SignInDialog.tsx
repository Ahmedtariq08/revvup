"use client";
import { TITLE } from "@/constants/global";
import { SignInSchema, SignInUser } from "@/types/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
    ClosedEyeIcon,
    EmailIcon,
    GoogleIcon,
    LockIcon,
    OpenEyeIcon,
} from "../common/icons";
import { openSignUpDialog } from "./SignUpDialog";
import { toast } from "sonner";
import { signInFb, signInWithGoogle } from "@/actions/auth.actions";

const SignInDialogId = "signin_modal";
export const openSignInDialog = () => {
    const modal = document.getElementById(SignInDialogId) as HTMLDialogElement | null;
    if (modal instanceof HTMLDialogElement) {
        modal.showModal();
    }
};

export const closeSignInDialog = () => {
    const modal = document.getElementById(SignInDialogId) as HTMLDialogElement | null;
    if (modal instanceof HTMLDialogElement) {
        modal.close();
    }
};

export const SignInDialog = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInUser>({
        resolver: zodResolver(SignInSchema),
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const onSubmit = async (data: SignInUser) => {
        const response = await signInFb(data);
        if (response.isSuccess) {
            closeSignInDialog();
        } else {
            toast.error(`Unable to log in. ${response.error?.message}`);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const user = await signInWithGoogle();
            if (user) {
                closeSignInDialog();
            }
        } catch (error) {
            toast.error(`Unable to sign in with google.`);
        }
    };

    return (
        <div>
            <dialog
                id={SignInDialogId}
                className="modal modal-bottom sm:modal-middle"
                onClick={closeSignInDialog}
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
                                    onClick={closeSignInDialog}
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
                                            style={{ width: "-webkit-fill-available" }}
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
                                            style={{ width: "-webkit-fill-available" }}
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
                                        {isSubmitting ? (
                                            <span className="loading loading-bars loading-sm"></span>
                                        ) : (
                                            "Sign In"
                                        )}
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
                                    <button
                                        className="btn bnt-sm btn-link p-1 btn-primary"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            closeSignInDialog();
                                            openSignUpDialog();
                                        }}
                                    >
                                        Sign up
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};
