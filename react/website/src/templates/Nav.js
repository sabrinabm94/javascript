import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target="#myNavbar"
                    >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
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