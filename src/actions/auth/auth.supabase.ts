"use server";

import { SignInUser, SignUpUser } from "@/types/auth.schema";
import { ApiResponse } from "@/types/response";
import { User } from "@/types/user.shema";
import { createClient } from "@/utils/supabase/server";
import { AuthResponse, AuthTokenResponsePassword } from "@supabase/supabase-js";

const handleAuthResponse = <T>(response: T): ApiResponse<T> => {
    return {
        data: response,
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

const mapToUser = (response: AuthTokenResponsePassword | AuthResponse): User => {
    const data = response.data;
    return {
        displayName: data.user?.user_metadata.displayName,
        email: data.user?.email ?? "",
        uid: data.user?.id ?? "",
        photoURL: data.user?.user_metadata.photoURL ?? "",
    };
};

// ANCHOR - Supabase
export const signInSupabase = async (
    user: SignInUser,
): Promise<ApiResponse<User | null>> => {
    try {
        const supabase = createClient();
        const response = await supabase.auth.signInWithPassword(user);
        if (response.error) {
            return handleAuthError(response.error);
        }
        const resUser = mapToUser(response);
        return handleAuthResponse(resUser);
    } catch (error) {
        return handleAuthError(error);
    }
};

export const signUpSupabase = async (
    user: SignUpUser,
    photoUrl: string,
): Promise<ApiResponse<User | null>> => {
    try {
        const supabase = createClient();
        const response = await supabase.auth.signUp({
            email: user.email,
            password: user.password,
            options: {
                data: {
                    confirmation_sent_at: Date.now(),
                    displayName: user.displayName,
                    photoUrl: photoUrl,
                },
            },
        });
        if (response.error) {
            return handleAuthError(response.error);
        }
        const resUser = mapToUser(response);
        return handleAuthResponse(resUser);
    } catch (error) {
        return handleAuthError(error);
    }
};

export const signOutSupabase = async () => {
    try {
        const supabase = createClient();
        const { error } = await supabase.auth.signOut();
        if (error) {
            return handleAuthError(error);
        }
        return handleAuthResponse({});
    } catch (error) {
        return handleAuthError(error);
    }
};
