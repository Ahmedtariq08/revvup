import firebase_app from "@/config/firebase";
import { getAuth } from "firebase/auth";
import { ApiResponse, requests } from "./client";
import { CreateUser, UpdateUser, User } from "@/types/user.shema";

// Firebase Auth
const auth = getAuth(firebase_app);

export const getAllUsers = async (): Promise<ApiResponse<User[]>> => {
    const token = (await auth.currentUser?.getIdToken()) ?? "";
    return await requests.get<User[]>("/users/fetch-user-data", token);
};

export const createNewUser = async (user: CreateUser): Promise<ApiResponse<User>> => {
    const token = (await auth.currentUser?.getIdToken()) ?? "";
    return await requests.post<User>("/users/create-user", token, user);
};

export const updateUserApi = async (user: UpdateUser): Promise<ApiResponse<User>> => {
    const token = (await auth.currentUser?.getIdToken()) ?? "";
    return await requests.post<User>("/users/update-user-data", token, user);
};

export const deleteUserApi = async (userId: string): Promise<ApiResponse<string>> => {
    const token = (await auth.currentUser?.getIdToken()) ?? "";
    return await requests.del<string>(`/users/delete-user/${userId}`, token);
};
