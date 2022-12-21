import { React, Component } from "react";

//components
import Carousel from "../components/Carousel";
import GetData from "../components/utils/GetData/GetData";

class Costumers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elements: [],
        };
    }

    handleGetData = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            this.setState({ elements: data });
        }
    };

    render() {
        return (
            <section
                id="costumers"
                className="constumers container-fluid bg-grey"
            >
                <GetData
                    collection="costumersElements"
                    parentCallback={(data) => {
                        this.handleGetData(data);
                    }}
                />
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

export default Costumers;
