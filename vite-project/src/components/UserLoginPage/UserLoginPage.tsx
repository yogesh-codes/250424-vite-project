import UserLoginForm from "./UserLoginForm/UserLoginForm";
import Header from "../Header/Header";

function UserLoginPage() {
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
