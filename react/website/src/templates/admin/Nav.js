import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="About">About
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="costumers">Costumers</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="pricing">Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="clientsContact">Clients Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Nav;

