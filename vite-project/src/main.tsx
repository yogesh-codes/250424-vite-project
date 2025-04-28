import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Custom Auth implementation
// import { AuthProvider } from "./context/AuthContext.tsx";
//Supabase helper
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "./db-auth/supabaseClient.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <SessionContextProvider supabaseClient={supabase}>
            <App />
        </SessionContextProvider>
    </StrictMode>
);
