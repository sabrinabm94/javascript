import { React, Component } from "react";

//components
import GetData from "../components/utils/GetData";
import Text from "../components/Text";

class PageHeader extends Component {
    constructor() {
        super();

        this.state = {
            elements: [],
            text: ""
        };
    }

    handleGetData = (childData) => {
        this.setState(
            { elements: childData },
        )
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
            <section className="page-header jumbotron text-center">
                <GetData collection="companyElements" justOne={true} parentCallback={this.handleGetData} />
                <h1 className="title">{this.state.elements.name}</h1>
                <Text className="subtitle" text={this.state.elements.content} parentCallback={this.breaklinesCallback} />
            </section>
        );
    }
}

export default PageHeader;
