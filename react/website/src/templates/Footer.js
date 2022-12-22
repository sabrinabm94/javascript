import React from "react";
import Glyphicon from "../components/Glyphicon/Glyphicon";

const Footer = (props) => {
    return (
        <footer className="footer container-fluid text-center">
            <a href="#header" title="To Top">
                <Glyphicon name="glyphicon-chevron-up" />
            </a>
        </footer>
    );
};
export default Footer;
