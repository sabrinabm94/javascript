import { React, Component } from "react";

//components
import Glyphicon from "../components/Glyphicon";
import GetData from "../components/utils/GetData";
import Text from "../components/Text";

class About extends Component {
    constructor() {
        super();

        this.state = {
            elements: [],
            text: ""
        };
    }

    handleGetData = (data) => {
        if(data && (data !== null && data !== undefined && data !== "")) {
            this.setState(
                { elements: data },
            )
        }
    }

    handleBreaklines = (data) => {
        if(data && (data !== null && data !== undefined && data !== "")) {
            this.setState(
                { text: data },
            )
        }
    }

    render() {
        return (
            <section id="about" className="about container-fluid bg-grey">
                <GetData collection="aboutElements" justOne={true} parentCallback={this.handleGetData} />
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
                        <h2 className="title">
                            {this.state.elements.title}
                        </h2>
                        <Text className="subtitle" text={this.state.elements.content} parentCallback={this.handleBreaklines} />
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
