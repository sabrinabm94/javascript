import { React, Component } from "react";
import { db, databaseRef, get } from "../init-firebase";

//components
import GetData from "../components/utils/GetData";

class PageHeader extends Component {
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
            <section className="page-header jumbotron text-center">
                <GetData collection="companyElements" justOne={true} parentCallback={this.handleCallback} />
                <h1 className="title">{this.state.elements.name}</h1>
                <h2 className="subtitle" dangerouslySetInnerHTML={{
                    __html: this.fixBreaklines(
                        this.state.elements.content
                    ),
                }}>
                </h2>
            </section>
        );
    }
}

export default PageHeader;
