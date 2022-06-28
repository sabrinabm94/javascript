import { React, Component } from "react";

//components
import Glyphicon from "../components/Glyphicon";
import GetData from "../components/utils/GetData";

class About extends Component {
    constructor() {
        super();

        this.state = {
            elements: [],
        };
    }

    handleCallback = (childData) => {
        this.setState(
            { elements: childData },
        )
    }

    fixBreaklines(text) {
        if (text) {
            return text.replace(/\n\r?/g, "<br />");
        }
    }

    render() {
        const { elements } = this.state;

        return (
            <section id="about" className="about container-fluid bg-grey">
                <GetData collection="aboutElements" justOne={true} parentCallback={this.handleCallback} />
                <div className="text-center">
                    <h1 className="title">ABOUT US</h1>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <Glyphicon
                            name={`glyphicon-${this.state.elements.icon} logo slideanim slide`}
                        />
                    </div>
                    <div className="col-sm-8">
                        <h2 className="subtitle">
                            {this.state.elements.title}
                        </h2>
                        <br />
                        <h4
                            className="content"
                            dangerouslySetInnerHTML={{
                                __html: this.fixBreaklines(
                                    this.state.elements.content
                                ),
                            }}
                        ></h4>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
