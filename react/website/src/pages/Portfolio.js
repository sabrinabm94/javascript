import { React, Component } from "react";

//components
import Thumbnail from "../components/Thumbnail";
import GetData from "../components/utils/GetData/GetData";

class Portfolio extends Component {
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
                id="portfolio"
                className="portfolio container-fluid bg-grey"
            >
                <GetData
                    collection="portfolioElements"
                    parentCallback={(data) => {
                        this.handleGetData(data);
                    }}
                />
                <div className="text-center">
                    <h1 className="title">PORTFOLIO</h1>
                    <h2 className="subtitle">What we have created</h2>
                </div>
                <div className="row text-center slideanim slide">
                    <>
                        {this.state.elements.map((data, key) => {
                            return (
                                <div className="col-sm-4" key={key}>
                                    <Thumbnail
                                        url={data.file}
                                        title={data.title}
                                        subtitle={data.subtitle}
                                    />
                                </div>
                            );
                        })}
                    </>
                </div>
                <br />
            </section>
        );
    }
}

export default Portfolio;
