import Header from "../Header/Header";
// import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import { toast } from "react-toastify";

import EditableTextField from "../EditableTextField/EditableTextField";

const USER_ALIAS = "name";

function ProfilePage() {
    const user = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user);
        if (!user) {
            console.log(user);
            console.log("Youre not logged in. Redirecting you to login page");
            toast("Please sign in!");
            navigate("/login");
        } else {
            console.log(
                "Redirecting to profiles page because you're logged in"
            );
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
                        <hr />
                        <h3>What should I call you?</h3>
                        <div className="row">
                            <div className="col-2">
                                <label
                                    className="col-form-label"
                                    htmlFor={USER_ALIAS}
                                >
                                    {USER_ALIAS}
                                </label>
                            </div>
                            <div className="col-8">
                                <EditableTextField
                                    htmlId="userAlias"
                                    text="hi there"
                                    placeholder="name"
                                ></EditableTextField>
                            </div>
                        </div>
                        <hr />
                        <h3>What should I call you?</h3>
                        <div className="row">
                            <div className="col-2">
                                <label
                                    className="col-form-label"
                                    htmlFor={USER_ALIAS}
                                >
                                    {USER_ALIAS}
                                </label>
                            </div>
                            <div className="col-8">
                                <EditableTextField
                                    htmlId="userAlias"
                                    text="hi there"
                                    placeholder="name"
                                ></EditableTextField>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfilePage;
