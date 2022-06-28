import { React, Component } from "react";

//components
import Carousel from "../components/Carousel";
import GetData from "../components/utils/GetData";

class Portfolio extends Component {
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

    render() {
        const { elements } = this.state;

        return (
            <section
                id="costumers"
                className="constumers container-fluid bg-grey"
            >
                <GetData collection="costumersElements" parentCallback={this.handleCallback} />
                <div className="text-center">
                    <h1 className="title">COSTUMERS</h1>
                    <h2 className="subtitle">What our customers say</h2>
                </div>
                <div className="row slideanim slide">
                    <Carousel elements={this.state.elements} />
                </div>
            </section>
        );
    }
}

export default Portfolio;
