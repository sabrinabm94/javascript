import { React, Component } from "react";
import { Link } from "react-router-dom";

//components
import Button from "../components/Button";
import Picture from "../components/Picture";
import GetData from "../components/utils/GetData";

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elements: [],
        };
    }

    handleGetData = (childData) => {
        if (
            childData &&
            childData !== null &&
            childData !== undefined &&
            childData !== ""
        ) {
            this.setState({ elements: childData });
        }
    };

    render() {
        if (
            this.state.elements &&
            this.state.elements !== null &&
            this.state.elements !== undefined
        ) {
            return (
                <nav className="navbar navbar-default navbar-fixed-top">
                    <GetData
                        collection="companyElements"
                        justOne={true}
                        parentCallback={(data) => {
                            this.handleGetData(data);
                        }}
                    />
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
                                <Picture
                                    className="picture logo"
                                    alt="company logo"
                                    url={this.state.elements.file}
                                ></Picture>
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <Link to="/about/">ABOUT</Link>
                                </li>
                                <li>
                                    <Link to="/services/">SERVICES</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio/">PORTFOLIO</Link>
                                </li>
                                <li>
                                    <Link to="/costumers/">COSTUMERS</Link>
                                </li>
                                <li>
                                    <Link to="/pricing/">PRICING</Link>
                                </li>
                                <li>
                                    <Link to="/contact/">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            );
        }
    }
}

export default Nav;
