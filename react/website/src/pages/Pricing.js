import { React, Component } from "react";

//components
import PainelSecondary from "../components/PainelSecondary";
import GetData from "../components/utils/GetData";

class Pricing extends Component {
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
            <section id="pricing" className="pricing container-fluid">
                <GetData collection="pricingElements" parentCallback={this.handleCallback} />
                <div className="text-center">
                    <h1 className="title">Pricing</h1>
                </div>
                <div className="row slideanim slide">
                    <>
                        {this.state.elements.map((data, key) => {
                            data.content = this.fixBreaklines(data.content);
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
