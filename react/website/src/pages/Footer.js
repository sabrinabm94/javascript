import React from "react";
import Glyphicon from "../components/Glyphicon";

const Footer = (props) => {
    return (
        <footer class="footer container-fluid text-center">
            <a className="title" href="#search" title="Go Top">
                <Glyphicon name="glyphicon-chevron-up" />
            </a>
        </footer>
    );
};
export default Footer;
