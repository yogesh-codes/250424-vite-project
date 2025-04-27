import { Link } from "react-router-dom";

Link;

function UserMenu() {
    return (
        <div className="d-flex">
            <Link to="/login" className="btn btn-sm">
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
        </div>
    );
}

export default UserMenu;
