import { createClient } from "@/utils/supabase/client";
import { AuthError, User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabaseClient = createClient();

// const auth = getAuth(firebase_app);

export const useAuth = () => {
    const [user, setUser] = useState<User | null>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<AuthError | null>(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const {
                    data: { session },
                    error,
                } = await supabaseClient.auth.getSession();
                if (error) throw error;

                if (session) {
                    setUser(session.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                setError(error as AuthError);
            } finally {
                setLoading(false);
            }
        };

        getUser();

        // Listen for auth state changes
        const { data: authListener } = supabaseClient.auth.onAuthStateChange(
            (event, session) => {
                console.log(session?.user);
                setUser(session?.user || null);
            },
        );

        // Cleanup the listener on unmount
        return () => {
            authListener.subscription.unsubscribe();
        };
    }, [user]);

    return { user, loading };
};
