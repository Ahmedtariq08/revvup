import { firebase_app } from "@/config/firebase";
import { User, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth(firebase_app);

export const useAuth = () => {
    const [user, setUser] = useState<User | null>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        auth.onAuthStateChanged(function handleAuth(user) {
            console.log(user);
            setUser(user ?? null);
            setLoading(false);
        });
    }, [user]);

    return { user, loading };
};
