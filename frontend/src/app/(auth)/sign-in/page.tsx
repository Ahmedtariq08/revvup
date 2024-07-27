"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { FcGoogle } from 'react-icons/fc';

const signInSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignInFormData = z.infer<typeof signInSchema>;

const SignInPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
    });

    const onSubmit = (data: SignInFormData) => {
        console.log(data);
        // Handle form submission here
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign-in here
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold mb-4">Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label" htmlFor="email">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register("email")}
                                className="input input-bordered"
                                placeholder="your@email.com"
                            />
                            {errors.email && (
                                <span className="text-error text-sm mt-1">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                        <div className="form-control mt-4">
                            <label className="label" htmlFor="password">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                {...register("password")}
                                className="input input-bordered"
                                placeholder="********"
                            />
                            {errors.password && (
                                <span className="text-error text-sm mt-1">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline gap-2"
                    >
                        {/* <FcGoogle className="text-xl" /> */}
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
