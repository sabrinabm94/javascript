import React, { Component } from "react";

//components
import Glyphicon from "../components/Glyphicon";
import Text from "../components/Text";

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };
    }

    breaklinesCallback = (data) => {
        if (data && (data !== null && data !== undefined && data !== "")) {
            this.setState(
                { text: data },
            )
        }
    }

    render() {
        return (<div className="card">
            <Glyphicon name={this.props.iconName} />
            <h2 className="title">{this.props.title}</h2>
            <Text className="subtitle" text={this.props.subtitle} parentCallback={this.breaklinesCallback} />
        </div>)
    }
}
export default Card;
