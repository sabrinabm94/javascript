import React, { Component } from "react";

class Text extends Component {
    fixBreaklines(text) {
        if (text && (text !== null && text !== undefined && text !== "")) {
            return text.replace(/\n\r?/g, "<br />");
        }

        return text;
    }

    render() {
        return (
            <p
                className={this.props.className}
                dangerouslySetInnerHTML={{
                    __html: this.fixBreaklines(this.props.text),
                }}
            ></p>
        );
    }
}
export default Text;
