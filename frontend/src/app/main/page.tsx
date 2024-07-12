"use client";
import Header from "@/components/Header";
import LoaderCircle from "@/components/LoaderCircle";
import { useAuth } from "@/hooks/useAuth";
import { Severity, showNotification } from "@/store/slices/notificationSlice";
import { useAppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MainPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { user, loading } = useAuth();

    const sendAuthNotificiation = (message: string, severity?: Severity) => {
        dispatch(showNotification({ message, severity }));
    };

    useEffect(() => {
        if (!user && loading!) {
            sendAuthNotificiation("Please sign in");
            router.push("/");
        }
    }, [user, loading]);

    return user && !loading ? (
        <div>
            <Header />
            <h1>Welcome</h1>

            <div>{user?.email}</div>
            <div>{user?.uid}</div>
            <div>{user?.displayName}</div>
        </div>
    ) : (
        loading && <LoaderCircle showLoader={loading} />
    );
};

export default MainPage;
