import { NavLink } from "react-router-dom";

function NavItems() {
    return (
        <ul className="navbar-items d-flex flex-row gap-2">
            <li className="nav-item">
                <NavLink to="/todos" className="nav-link">
                    Todos
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/profile" className="nav-link">
                    Profile
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                    About
                </NavLink>
            </li>
        </ul>
    );
}

export default NavItems;
