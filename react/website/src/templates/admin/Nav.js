import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth, signOut } from "../../init-firebase";

class Nav extends Component {
    componentDidMount() {
        this.userLoggout("loggout");
    }

    userLoggout(buttonClassname) {
        let buttonElement = document.querySelector("#" + buttonClassname);

        if (buttonElement && buttonElement !== undefined) {
            buttonElement.addEventListener("click", function () {
                //console.log("submit loggout");
                signOut(auth)
                    .then(() => {
                        return auth;
                    })
                    .catch((error) => {
                        return error;
                    });
            });
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="Company">
                                Company
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about">About</Link>
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
                        <li className="nav-item">
                            <Link to="register">Register User</Link>
                        </li>
                        <li className="nav-item loggout" id="loggout">
                            <Link to="login">Loggout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Nav;
