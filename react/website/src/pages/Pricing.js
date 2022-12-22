import { React, Component } from "react";

//components
import PainelSecondary from "../components/PainelSecondary/PainelSecondary";
import GetData from "../components/utils/GetData/GetData";

class Pricing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elements: [],
            text: "",
        };
    }

    handleGetData = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            this.setState({ elements: data });
        }
    };

    handleBreaklines = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            this.setState({ text: data });
        }
    };

    render() {
        return (
            <section id="pricing" className="pricing container-fluid">
                <GetData
                    collection="pricingElements"
                    parentCallback={(data) => {
                        this.handleGetData(data);
                    }}
                />
                <div className="text-center">
                    <h1 className="title">Pricing</h1>
                </div>
                <div className="row slideanim slide">
                    <>
                        {this.state.elements.map((data, key) => {
                            return (
                                <div className="col-sm-4 col-xs-12" key={key}>
                                    <PainelSecondary
                                        title={data.title}
                                        description={data.content}
                                        value={data.subtitle}
                                        link={data.link}
                                    />
                                </div>
                            );
                        })}
                    </>
                </div>
            </section>
        );
    }
}

export default Pricing;
