"use client";
import { signInSupabase, signUpSupabase } from "@/actions/auth/auth.supabase";
import { TITLE } from "@/constants/global";
import { Routes } from "@/constants/navigation";
import { SignInSchema, SignInUser, SignUpSchema, SignUpUser } from "@/types/auth.schema";
import { uploadPhoto } from "@/utils/cloudinary";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
    ClosedEyeIcon,
    EmailIcon,
    GoogleIcon,
    LockIcon,
    OpenEyeIcon,
    UserIcon,
} from "../common/icons";
import { useRouter } from "next/navigation";

interface AuthFormProps {
    type: "sign-in" | "sign-up";
}
export const AuthForm = (props: AuthFormProps) => {
    const { type } = props;
    const isSignIn = type === "sign-in";

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<SignInUser | SignUpUser>({
        resolver: zodResolver(isSignIn ? SignInSchema : SignUpSchema),
    });
    const router = useRouter();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [photo, setPhoto] = useState<File | null>(null);

    useEffect(() => {
        return () => {
            setShowPassword(false);
            setPhoto(null);
            reset();
        };
    }, []);

    //ANCHOR - Functions for Sign up
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

    const onSignUp = async (data: SignUpUser) => {
        let photoUrl = "";
        if (photo) {
            const photoUri = (await toBase64(photo)) as string;
            photoUrl = await uploadPhoto(photoUri);
        }
        const response = await signUpSupabase(data, photoUrl);
        console.log(response.data);
        if (response.isSuccess) {
            toast.success("User created successfully!");
            router.push(Routes.Main);
        } else {
            toast.error(`Unable to sign up ${response.error.message}`);
        }
    };

    // ANCHOR - Functions for Sign In
    const onSignIn = async (data: SignInUser) => {
        const response = await signInSupabase(data);
        console.log(response.data);
        if (response.isSuccess) {
            toast.success("Logged in successfully!");
            router.push(Routes.Main);
        } else {
            toast.error(`Unable to log in. ${response.error?.message}`);
        }
    };

    const handleGoogleSignIn = async () => {
        toast.info("Google sign with Supabase coming soon!");
    };

    return (
        <div>
            <Link href={Routes.Main} passHref>
                <button className="btn btn-sm mt-4 ml-4">
                    <span>Back</span>
                </button>
            </Link>

            <div className="card-body items-center">
                <div className="flex justify-center items-center w-full mb-2">
                    <h2 className="card-title text-2xl font-bold mb-4">
                        {isSignIn ? " Welcome to " : "Join"}
                        <span className="text-3xl text-accent">{TITLE}!</span>
                    </h2>
                </div>

                <form onSubmit={handleSubmit(isSignIn ? onSignIn : (onSignUp as any))}>
                    {!isSignIn && (
                        <div className="form-control mb-4">
                            <label className="input input-bordered border-r-0 flex items-center gap-2">
                                <UserIcon />
                                <input
                                    type="text"
                                    id="signup-displayName"
                                    {...register("displayName")}
                                    autoComplete="displayName"
                                    placeholder="Display Name"
                                    style={{ width: "-webkit-fill-available" }}
                                />
                            </label>
                            {(errors as any)?.displayName && (
                                <span className="text-error text-sm mt-1">
                                    {(errors as any)?.displayName.message}
                                </span>
                            )}
                        </div>
                    )}

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
                            {showPassword ? <ClosedEyeIcon /> : <OpenEyeIcon />}
                        </button>
                    </div>
                    {errors.password && (
                        <span className="text-error text-sm mt-1">
                            {errors.password.message}
                        </span>
                    )}
                    {!isSignIn && (
                        <div className="form-control mt-4">
                            <input
                                type="file"
                                placeholder="Profile photo"
                                accept="image/*"
                                onChange={handlePhotoChange}
                                className="file-input file-input-bordered file-input-sm file-input-primary w-full max-w-xs"
                            />
                        </div>
                    )}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-secondary">
                            {isSubmitting ? (
                                <span className="loading loading-bars loading-sm"></span>
                            ) : isSignIn ? (
                                "Sign In"
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </div>
                    {isSignIn && (
                        <>
                            <div className="divider mt-6">OR</div>
                            <div className="flex justify-center mt-6">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleGoogleSignIn();
                                    }}
                                    className="btn btn-outline gap-2 w-full"
                                >
                                    <GoogleIcon />
                                    Sign in with Google
                                </button>
                            </div>
                        </>
                    )}
                </form>

                <div className="text-center mt-4">
                    <p className="text-sm">
                        {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
                        <a
                            href={isSignIn ? Routes.SignUp : Routes.SignIn}
                            className="btn bnt-sm btn-link p-1 btn-primary"
                        >
                            {isSignIn ? "Sign Up" : "Sign In"}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
