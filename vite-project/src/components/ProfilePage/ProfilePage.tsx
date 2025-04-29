import Header from "../Header/Header";
// import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import { toast } from "react-toastify";

import EditableTextField from "../EditableTextField/EditableTextField";

function ProfilePage() {
    const user = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user);
        if (!user) {
            console.log(user);
            console.log("Youre not logged in. Redirecting you to login page");
            navigate("/login");
            toast("this is a toast");
        } else {
            console.log("Showing profiles page because you're logged in");
        }
    }, []);
    return (
        <div>
            <Header></Header>
            {user && (
                <div className="container-fluid page">
                    You're logged in
                    <div className="row">
                        <label htmlFor="userEmail" className="form-label">
                            Email
                        </label>
                        <span>{user.email ?? "no-email"}</span>
                        <EditableTextField
                            text="hi there"
                            placeholder="name"
                        ></EditableTextField>
                        <p>What can I call you?</p>
                        <p></p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfilePage;
