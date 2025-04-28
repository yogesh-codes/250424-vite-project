import UserLoginForm from "./UserLoginForm/UserLoginForm";
import Header from "../Header/Header";
import { useUser } from "@supabase/auth-helpers-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function UserLoginPage() {
    const user = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            console.log("You're already logged in, redirecting to todos");
            navigate("/todos");
        }
    }, [user, navigate]);

    return (
        <>
            <Header />
            <div className="d-flex justify-content-center">
                <div className="card blurbg" style={{ maxWidth: "30em" }}>
                    <div className="card-body">
                        <UserLoginForm />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserLoginPage;
