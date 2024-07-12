import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import firebase_app from "@/config/firebase";

const auth = getAuth(firebase_app);

export const useAuth = () => {
    const [user, setUser] = useState<User | null>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        auth.onAuthStateChanged(function handleAuth(user) {
            setUser(user ?? null);
            setLoading(false);
        });
    }, [user]);

    return { user, loading };
};
