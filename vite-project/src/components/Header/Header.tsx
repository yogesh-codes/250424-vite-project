import "./Header.css";
//Components
import UserMenu from "./UserMenu/UserMenu";
import NavItems from "./NavItems/NavItems";
function Header() {
    return (
        <header className="container-fluid mb-3 blurbg mt-2">
            <nav
                className="container-fluid d-flex align-items-center gap-3 justify-content-between py-2"
                style={{ maxWidth: "35em" }}
            >
                <div className="nav-brand">CalmList</div>

                <div className="d-flex align-items-center">
                    <NavItems />
                    <UserMenu />
                </div>

                {/* <button className="btn btn-sm" type="button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-list"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                                />
                            </svg>
                        </button> */}
            </nav>
        </header>
    );
}

export default Header;
