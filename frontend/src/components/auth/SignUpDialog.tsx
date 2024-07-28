"use client";
import { signInWithGoogle } from "@/apis/auth";
import { TITLE } from "@/constants/global";
import { SignInSchema, SignInUser, SignUpSchema, SignUpUser } from "@/types/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    ClosedEyeIcon,
    EmailIcon,
    GoogleIcon,
    LockIcon,
    OpenEyeIcon,
    UserIcon,
} from "../common/icons";
import { openSignInDialog } from "./SignInDialog";

const SignUpDialogId = "signup_modal";
export const openSignUpDialog = () => {
    const modal = document.getElementById(SignUpDialogId) as HTMLDialogElement | null;
    if (modal instanceof HTMLDialogElement) {
        modal.showModal();
    }
};

export const closeSignUpDialog = () => {
    const modal = document.getElementById(SignUpDialogId) as HTMLDialogElement | null;
    if (modal instanceof HTMLDialogElement) {
        modal.close();
    }
};

export const SignUpDialog = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpUser>({
        resolver: zodResolver(SignUpSchema),
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const onSubmit = (data: SignInUser) => {
        console.log(data);
        // Handle form submission here
    };

    return (
        <div>
            <dialog
                id={SignUpDialogId}
                className="modal modal-bottom sm:modal-middle"
                onClick={closeSignUpDialog}
            >
                <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                    <form method="dialog"></form>

                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex justify-between items-center w-full mb-4">
                                <h2 className="card-title text-2xl font-bold mb-4">
                                    Create Account
                                </h2>
                                <button
                                    className="btn btn-sm absolute right-2 top-2"
                                    onClick={closeSignUpDialog}
                                >
                                    <span> X</span>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="input input-bordered border-r-0 flex items-center gap-2">
                                        <UserIcon />
                                        <input
                                            type="text"
                                            id="signup-displayName"
                                            {...register("displayName")}
                                            autoComplete="displayName"
                                            placeholder="Display Name"
                                        />
                                    </label>
                                    {errors.displayName && (
                                        <span className="text-error text-sm mt-1">
                                            {errors.displayName.message}
                                        </span>
                                    )}
                                </div>
                                <div className="form-control">
                                    <label className="input input-bordered border-r-0 flex items-center gap-2 mt-4">
                                        <EmailIcon />
                                        <input
                                            type="email"
                                            id="signup-email"
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
                                            id="signup-password"
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
                                <div className="form-control mt-4">
                                    <input
                                        type="file"
                                        className="file-input file-input-bordered file-input-sm file-input-primary w-full max-w-xs"
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-secondary">
                                        Create Account
                                    </button>
                                </div>
                            </form>

                            <div className="text-center mt-4">
                                <p className="text-sm">
                                    Already have an account?{" "}
                                    <a
                                        href="#"
                                        className="text-primary hover:underline"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            closeSignUpDialog();
                                            openSignInDialog();
                                        }}
                                    >
                                        Sign in
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
