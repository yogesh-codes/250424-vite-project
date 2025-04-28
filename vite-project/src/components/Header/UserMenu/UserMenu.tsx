import { Link } from "react-router-dom";
// import { useAuth } from "../../../context/AuthContext";
import { useUser } from "@supabase/auth-helpers-react";
import { shortenEmail } from "../../../utils/utils";

import "./UserMenu.css";

function UserMenu() {
    let user = useUser();
    let displayTextUserEmail = "";
    if (!user) {
        displayTextUserEmail = "Guest";
    } else if (!user.email) {
        displayTextUserEmail = "(User-without-email)";
    } else {
        displayTextUserEmail = shortenEmail(user.email as string);
    }

    return (
        <div className="d-flex align-items-center justify-content-start">
            <Link to="/profile" className="btn btn-sm">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-person-fill"
                    viewBox="0 0 16 16"
                >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
            </Link>
            <div className="">{displayTextUserEmail}</div>
            {!user && (
                <div className={user ? "hide" : "show"}>
                    <Link className="btn btn-sm btn-primary" to="/login">
                        Login
                    </Link>
                </div>
            )}

            {user && (
                <div className={user ? "show" : "hide"}>
                    <Link className="btn btn-sm btn-primary" to="/logout">
                        Sign Out
                    </Link>
                </div>
            )}
        </div>
    );
}

export default UserMenu;
