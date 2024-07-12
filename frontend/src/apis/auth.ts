import { SignInUser, SignUpUser } from "@/types/auth.schema";
import {
    UserCredential,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
} from "firebase/auth";
import firebase_app from "../config/firebase";
import { ApiResponse } from "./client";

// Firebase Auth
const auth = getAuth(firebase_app);

const handleAuthResponse = (
    response: UserCredential | void,
): ApiResponse<UserCredential | null> => {
    return {
        data: response ?? null,
        isSuccess: true,
        error: null,
    };
};

const handleAuthError = (error: any): ApiResponse<null> => {
    console.log(error);
    const errorMessage =
        typeof error.response?.data == "string" ? error.response?.data : error.message;
    return {
        data: null,
        error: { statusCode: error.response?.status ?? 500, message: errorMessage },
        isSuccess: false,
    };
};

export const signUpFb = async (
    user: SignUpUser,
): Promise<ApiResponse<UserCredential | null>> => {
    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            user.email,
            user.password,
        );
        return handleAuthResponse(response);
    } catch (error: any) {
        return handleAuthError(error);
    }
};

export const signInFb = async (
    user: SignInUser,
): Promise<ApiResponse<UserCredential | null>> => {
    try {
        const response = await signInWithEmailAndPassword(
            auth,
            user.email,
            user.password,
        );
        return handleAuthResponse(response);
    } catch (error: any) {
        return handleAuthError(error);
    }
};

export const signOutFb = async (): Promise<ApiResponse<UserCredential | null>> => {
    try {
        const response = await auth.signOut();
        return handleAuthResponse(response);
    } catch (error) {
        return handleAuthError(error);
    }
};
