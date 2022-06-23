import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="portfolio">Portfolio
                            <span className="sr-only">(current)</span>
                        </Link>

                    </li>
                    <li className="nav-item">
                        <Link to="costumers">Costumers</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Nav;

