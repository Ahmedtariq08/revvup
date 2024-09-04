// import { SignInUser, SignUpUser } from "@/types/auth.schema";
// import { User } from "@/types/user.shema";
// import { convertToSchemaUser } from "@/utils";
// import {
//     GoogleAuthProvider,
//     UserCredential,
//     createUserWithEmailAndPassword,
//     getAuth,
//     signInWithEmailAndPassword,
//     signInWithPopup,
// } from "firebase/auth";
// import { firebase_app } from "../config/firebase";
// import { ApiResponse } from "./client";
// import { createNewUser } from "./users";

// // Firebase Auth
// const auth = getAuth(firebase_app);

// const handleAuthResponse = <T>(response: T): ApiResponse<T> => {
//     return {
//         data: response,
//         isSuccess: true,
//         error: null,
//     };
// };

// const handleAuthError = (error: any): ApiResponse<null> => {
//     console.log(error);
//     const errorMessage =
//         typeof error.response?.data == "string" ? error.response?.data : error.message;
//     return {
//         data: null,
//         error: { statusCode: error.response?.status ?? 500, message: errorMessage },
//         isSuccess: false,
//     };
// };

// // API Functions
// export const signUpFb = async (user: SignUpUser): Promise<ApiResponse<User | null>> => {
//     try {
//         const response = await createUserWithEmailAndPassword(
//             auth,
//             user.email,
//             user.password,
//         );
//         const apiUser: User | null = convertToSchemaUser(response, user);
//         if (apiUser) {
//             const firestoreResponse = await createNewUser(apiUser);
//             if (firestoreResponse.isSuccess) {
//                 return handleAuthResponse(firestoreResponse.data);
//             } else {
//                 throw Error(firestoreResponse.error.message);
//             }
//         }
//         throw Error("Unable to sign up");
//     } catch (error: any) {
//         return handleAuthError(error);
//     }
// };

// export const signInFb = async (
//     user: SignInUser,
// ): Promise<ApiResponse<UserCredential | null>> => {
//     try {
//         const response = await signInWithEmailAndPassword(
//             auth,
//             user.email,
//             user.password,
//         );
//         return handleAuthResponse(response);
//     } catch (error: any) {
//         return handleAuthError(error);
//     }
// };

// export const signInWithGoogle = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//         const result = await signInWithPopup(auth, provider);
//         return result.user;
//     } catch (error) {
//         console.error("Error signing in with Google", error);
//     }
// };

// export const signOutFb = async (): Promise<ApiResponse<void | null>> => {
//     try {
//         const response = await auth.signOut();
//         return handleAuthResponse(response);
//     } catch (error) {
//         return handleAuthError(error);
//     }
// };
