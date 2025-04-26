import "./Header.css";
import UserMenu from "./UserMenu/UserMenu";
function Header() {
    return (
        <header className="container-fluid mb-3 blurbg  d-flex justify-content-center">
            <nav
                className="navbar navbar-expand d-flex justify-content-center"
                style={{ maxWidth: "32em" }}
            >
                <div className="d-flex ml-2 justify-contents-start">
                    <div className="nav-brand">CalmList</div>
                </div>
                <div className="">
                    <ul className="navbar-nav d-flex gap-3 mx-5 justify-contents-center">
                        <li>Todos</li>
                        <li>Profile</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="d-flex justify-contents-right mr-5">
                    <UserMenu />
                </div>
            </nav>
        </header>
    );
}

export default Header;
