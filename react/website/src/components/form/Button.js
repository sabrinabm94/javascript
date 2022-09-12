import React, { Component } from "react";

class Button extends Component {
    render() {
        return (
            <button
                type={this.props.type}
                className={this.props.className}
                id={this.props.id}
                required={this.props.required}
            >
                {this.props.text}
            </button>
        );
    }
}
export default Button;