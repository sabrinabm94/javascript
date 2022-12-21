import { React, Component } from "react";

//components
import GetData from "../components/utils/GetData/GetData";
import Text from "../components/Text";

class PageHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            elements: [],
            text: "",
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

    handleBreaklines = (data) => {
        if (data && data !== null && data !== undefined && data !== "") {
            this.setState({ text: data });
        }
    };

    render() {
        return (
            <section className="page-header jumbotron text-center">
                <GetData
                    collection="companyElements"
                    justOne={true}
                    parentCallback={(data) => {
                        this.handleGetData(data);
                    }}
                />
                <h1 className="title">{this.state.elements.name}</h1>
                <Text
                    className="subtitle"
                    text={this.state.elements.content}
                    parentCallback={this.handleBreaklines}
                />
            </section>
        );
    }
}

export default PageHeader;
