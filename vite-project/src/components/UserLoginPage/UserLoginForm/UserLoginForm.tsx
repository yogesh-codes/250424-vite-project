import { useState } from "react";
import { supabase } from "../../../db-auth/supabaseClient";
import { useNavigate } from "react-router-dom";

//for typing
import { SignInWithPasswordCredentials } from "@supabase/supabase-js";

function UserLoginForm() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [loginErrorMessage, setLoginErrorMessage] = useState<string | null>(
        ""
    );

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //Attempt login
        // const userCredentials: SignInWithPasswordCredentials = {
        //     email: userEmail,
        //     password: userPassword,
        // };

        console.log("sending request- username and password to supabase");
        const { data, error } = await supabase.auth.signInWithPassword({
            email: userEmail,
            password: userPassword,
        });
        console.log("received response from supabase");

        if (error) {
            console.error(error.code);
            console.error(error.message);
            console.error(error.name);
            console.error(error.status);

            if (error.code === "invalid_credentials") {
                setLoginErrorMessage(error.message);
            }

            alert(error.message);

            // setUserPassword("")
        } else {
            alert("Login successful! Will redirect to session");
            console.log("User session", data.session);
            navigate("/");
        }
    };

    return (
        <div>
            <form onSubmit={handleOnSubmit} noValidate={true}>
                <div className="">
                    <div className="mb-2">
                        <label
                            htmlFor="userEmail"
                            className="form-label"
                            hidden={true}
                        >
                            Enter Email
                        </label>
                        <input
                            className="form-control"
                            id="userEmail"
                            type="email"
                            formNoValidate={true}
                            value={userEmail}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setUserEmail(e.target.value);
                            }}
                            placeholder="Email"
                        />
                    </div>

                    <div className="mb-1">
                        <label
                            htmlFor="userPassword"
                            className="form-label"
                            hidden={true}
                        >
                            Enter Password
                        </label>
                        <input
                            className="form-control"
                            id="userPassword"
                            type="password"
                            formNoValidate={false}
                            value={userPassword}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setUserPassword(e.target.value);
                            }}
                            placeholder="Password"
                        />
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button
                            className="btn btn-sm btn-primary"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>

                    <div>
                        {loginErrorMessage && (
                            <div className="alert alert-danger">
                                {loginErrorMessage}
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserLoginForm;
