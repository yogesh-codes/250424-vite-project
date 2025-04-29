import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserLogoutPage() {
    const user = useUser();
    const supabaseClient = useSupabaseClient();

    const navigate = useNavigate();

    useEffect(() => {
        // define an async IIFE so we can await inside useEffect
        (async () => {
            if (user) {
                console.log("signout procedure started");
                // you could set some local "isLoggingOut" state to show a spinner here
                await supabaseClient.auth.signOut();
                console.log("signout async procedure complete.");
            }
            // after sign-out (or if they weren’t logged in), go back
            navigate("/todos", { replace: true });
        })();
    }, [user, supabaseClient, navigate]);

    return (
        <div className="page">
            <h1>We are are logging you out</h1>
        </div>
    );
}

export default UserLogoutPage;
