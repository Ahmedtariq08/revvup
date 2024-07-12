import firebase_app from "@/config/firebase";
import { getAuth } from "firebase/auth";
import { ApiResponse, requests } from "./client";
import { CreateUser, User } from "@/types/user.shema";

// Firebase Auth
const auth = getAuth(firebase_app);

export const getAllUsers = async (): Promise<ApiResponse<User[]>> => {
    const token = (await auth.currentUser?.getIdToken()) ?? "";
    const response = await requests.get<User[]>("/users/fetch-user-data", token);
    return response;
};

export const createNewUser = async (user: CreateUser): Promise<ApiResponse<User>> => {
    const token = (await auth.currentUser?.getIdToken()) ?? "";
    const response = await requests.post<User>("/users/create-user", token, user);
    return response;
};
