"use server";
import { db } from "@/utils/firebase/firebase";
import { User } from "@/types/user.shema";
import { collection, getDocs } from "firebase/firestore";

const UsersCollection = collection(db, "Users");
const DealershipCollection = collection(db, "Dealerships");

export const getAllUsers = async (): Promise<User[]> => {
    try {
        const usersSnapshot = await getDocs(UsersCollection);
        const users: User[] = [];
        usersSnapshot.forEach((doc) => {
            users.push({ uid: doc.id, ...doc.data() } as User);
        });
        return users;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getAllDealerships = async (): Promise<any[]> => {
    try {
        const dealershipsSnapshot = await getDocs(DealershipCollection);
        const dealerships: any[] = [];
        dealershipsSnapshot.forEach((doc) => {
            dealerships.push({ uid: doc.id, ...doc.data() });
        });
        return dealerships;
    } catch (error) {
        console.error(error);
        return [];
    }
};
