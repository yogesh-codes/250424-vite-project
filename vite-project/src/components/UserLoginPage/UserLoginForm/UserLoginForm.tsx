import { useState } from "react";

function UserLoginForm() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (userEmail === "1" && userPassword === "1") {
            alert("Login successful");
        } else {
            alert("Wrong username or password.");
        }
        setUserPassword("");
    };

    return (
        <div>
            <form onSubmit={handleOnSubmit} noValidate={true}>
                <div className="">
                    <label
                        htmlFor="userEmail"
                        className="form-label"
                        hidden={false}
                    >
                        Enter Email
                    </label>
                    <input
                        className="form-control"
                        id="userEmail"
                        type="email"
                        formNoValidate={true}
                        value={userEmail}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setUserEmail(e.target.value);
                        }}
                    />

                    <div className="">
                        <label
                            htmlFor="userPassword"
                            className="form-label"
                            hidden={false}
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
                </div>
            </form>
        </div>
    );
}

export default UserLoginForm;
