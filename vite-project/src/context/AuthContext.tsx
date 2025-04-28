import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../db-auth/supabaseClient";

// for typing
import { ReactNode } from "react";

//-------------------------------------

type UserType = { userId: string; userEmail: string; userName: string } | null;

const AuthContext = createContext<UserType>(null);

function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserType>(null);

    useEffect(() => {
        let subscription: { unsubscribe: () => void } | null = null;
        //on mount, load any existing session

        const initAuth = async () => {
            const {
                data: { session },
                error,
            } = await supabase.auth.getSession();

            if (error) {
                console.error("Error fetching during 'get session'", error);
                setUser(null);
            } else if (session?.user) {
                const u = session.user;

                setUser({
                    userEmail: u.email ?? "(undefined email)",
                    userId: u.id,
                    userName: (u.user_metadata as any)?.name ?? "Unnamed User",
                });
            }

            //2. subscribe to future auth changes
            const { data } = supabase.auth.onAuthStateChange(
                (_event, newSession) => {
                    if (newSession?.user) {
                        const u = newSession.user;

                        setUser({
                            userEmail: u.email ?? "(undefined email)",
                            userId: u.id,
                            userName:
                                (u.user_metadata as any)?.name ??
                                "Unnamed User",
                        });
                    } else {
                        setUser(null);
                    }
                }
            );

            subscription = data.subscription;
        };

        initAuth();

        return () => {
            subscription?.unsubscribe();
        };
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
