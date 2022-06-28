import React from "react";
import { Link } from "react-router-dom";

//components
import Button from "../components/Button";

const Nav = (props) => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <Button
                        type="button"
                        className="navbar-toggle"
                        dataToggle="collapse"
                        dataTarget="#myNavbar"
                    >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </Button>
                    <a className="navbar-brand" href="/">
                        Logo
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/about">ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/services">SERVICES</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">PORTFOLIO</Link>
                        </li>
                        <li>
                            <Link to="/costumers">COSTUMERS</Link>
                        </li>
                        <li>
                            <Link to="/pricing">PRICING</Link>
                        </li>
                        <li>
                            <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Nav;
