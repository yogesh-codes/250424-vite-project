import Header from "../Header/Header";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "@supabase/auth-helpers-react";

function ProfilePage() {
    const user = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user);
        if (!user) {
            console.log(user);
            alert("Youre not logged in. Redirecting you to login page");
            navigate("/login");
        } else {
            console.log("Showing profiles page because you're logged in");
        }
    }, []);
    return (
        <div>
            <Header></Header>
            <div>{user && <div>You're logged in</div>}</div>
        </div>
    );
}

export default ProfilePage;
