import Header from "../Header/Header";
// import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import EditableTextField from "../EditableTextField/EditableTextField";

import { useUser } from "@supabase/auth-helpers-react";
import SyncStatusSpinner from "../SyncStatusSpinner/SyncStatusSpinner";

const USER_ALIAS = "name";

function ProfilePage() {
    const user = useUser();
    const navigate = useNavigate();

    const [userAlias, setUserAlias] = useState<string>("");

    const [userSomething, setUserSomething] = useState<string>("");

    console.log(userAlias);

    //On mount, check if user is logged in first
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
    }, [user, navigate]);

    // Check if userAlias has changed
    useEffect(() => {
        console.log({ userAlias, userSomething });
    }, [userAlias, userSomething]);

    return (
        <div>
            <Header />

            {user && (
                <div className="container-fluid page">
                    You're logged in
                    <div className="d-flex align-items-top">
                        <h2 className="me-1">Profile</h2>
                        <SyncStatusSpinner />
                    </div>
                    <div className="row">
                        <label htmlFor="userEmail" className="">
                            Email
                        </label>
                        <span>{user.email ?? "no-email"}</span>
                        <hr />
                    </div>
                    <div className="row">
                        <h3 hidden={true} style={{ display: "inline" }}>
                            Name
                        </h3>
                        <label className="col-form-label" htmlFor={USER_ALIAS}>
                            {USER_ALIAS}
                        </label>
                        <EditableTextField
                            htmlId="userAlias"
                            text={userAlias}
                            placeholder="name"
                            callbackOnUpdate={setUserAlias}
                        ></EditableTextField>

                        <hr />
                    </div>
                    <div className="row">
                        <h3 hidden={true} style={{ display: "inline" }}>
                            User Preferences- Theme
                        </h3>
                        <label className="col-form-label" htmlFor="userAge">
                            something
                        </label>
                        <EditableTextField
                            htmlId="userAlias"
                            text="something"
                            placeholder="name"
                            callbackOnUpdate={setUserSomething}
                        ></EditableTextField>

                        <hr />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfilePage;
