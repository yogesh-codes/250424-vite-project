import Header from "../Header/Header";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
    const user=useAuth();
    const navigate=useNavigate()

    return (
        
        <div>
            <Header></Header>
            <div>
                {user && <div>
                    You're logged in
                </div>}

                {!user && navigate("/login");}
            </div>
                
        </div>
    )
}

export default ProfilePage;