"use client";
import { db, firebase_app } from "@/utils/firebase/firebase";
import { SignInUser, SignUpUser } from "@/types/auth.schema";
import { ApiResponse } from "@/types/response";
import { User } from "@/types/user.shema";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
    UserCredential,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// Firebase Auth
const auth = getAuth(firebase_app);

export const handleAuthResponse = <T>(response: T): ApiResponse<T> => {
    return {
        data: response,
        isSuccess: true,
        error: null,
    };
};

export const handleAuthError = (error: any): ApiResponse<null> => {
    console.log(error);
    const errorMessage =
        typeof error.response?.data == "string" ? error.response?.data : error.message;
    return {
        data: null,
        error: { statusCode: error.response?.status ?? 500, message: errorMessage },
        isSuccess: false,
    };
};

// ANCHOR - Firebase
export const signUpFb = async (
    user: SignUpUser,
    photoUrl: string,
): Promise<ApiResponse<User | null>> => {
    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            user.email,
            user.password,
        );
        const responseUser = response.user;
        if (responseUser == null) {
            return handleAuthError({ message: "User not created." });
        }

        await updateProfile(responseUser, {
            displayName: user.displayName ?? "",
            photoURL: photoUrl,
        });

        // Add user to Firestore 'Users' collection
        const userToAdd: User = {
            uid: responseUser.uid,
            email: user.email,
            displayName: user.displayName ?? "",
            city: "",
            country: "",
            photoURL: photoUrl,
        };
        await setDoc(doc(db, "Users", userToAdd.uid), userToAdd);
        return handleAuthResponse(userToAdd);
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

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        console.error("Error signing in with Google", error);
    }
};

export const signOutFb = async (): Promise<ApiResponse<void | null>> => {
    try {
        const response = await auth.signOut();
        return handleAuthResponse(response);
    } catch (error) {
        return handleAuthError(error);
    }
};
