"use client";
import { signUpFb } from "@/actions/auth.actions";
import { uploadPhoto } from "@/config/cloudinary";
import { SignUpSchema, SignUpUser } from "@/types/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
    ClosedEyeIcon,
    EmailIcon,
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
        formState: { errors, isSubmitting },
    } = useForm<SignUpUser>({
        resolver: zodResolver(SignUpSchema),
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [photo, setPhoto] = useState<File | null>(null);

    const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    };

    const toBase64 = (file: File) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });

    const onSubmit = async (data: SignUpUser) => {
        let photoUrl = "";
        if (photo) {
            const photoUri = (await toBase64(photo)) as string;
            photoUrl = await uploadPhoto(photoUri);
        }
        const response = await signUpFb(data, photoUrl);
        if (response.isSuccess) {
            setPhoto(null);
            closeSignUpDialog();
        } else {
            toast.error(`Unable to sign up ${response.error.message}`);
        }
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
                                        placeholder="Profile photo"
                                        accept="image/*"
                                        onChange={handlePhotoChange}
                                        className="file-input file-input-bordered file-input-sm file-input-primary w-full max-w-xs"
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-secondary">
                                        {isSubmitting ? (
                                            <span className="loading loading-bars loading-sm"></span>
                                        ) : (
                                            "Create Account"
                                        )}
                                    </button>
                                </div>
                            </form>

                            <div className="text-center mt-4">
                                <p className="text-sm">
                                    Already have an account?{" "}
                                    <button
                                        className="btn bnt-sm btn-link p-1 btn-primary"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            closeSignUpDialog();
                                            openSignInDialog();
                                        }}
                                    >
                                        Sign in
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
