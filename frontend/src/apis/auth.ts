import { BaseUser, SignInUser, SignUpUser } from "@/types/auth.schema";
import { requests } from "./client";

export const signIn = async (user: SignInUser) => {
    return await requests.post<BaseUser>("/users/sign-in", "", user);
};

export const signUp = async (user: SignUpUser) => {
    return await requests.post<BaseUser>("/users/sign-up", "", user);
};
