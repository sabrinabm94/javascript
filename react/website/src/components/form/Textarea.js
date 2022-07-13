import React, { Component } from "react";

class Textarea extends Component {
    render() {
        if (this.props.name) {
            return (
                <div className="form-group">
                    <label htmlFor={this.props.name}>{this.props.name}</label>
                    <textarea
                        className={this.props.className}
                        name={this.props.name}
                        id={this.props.id}
                        placeholder={this.props.placeholder}
                    ></textarea>
                </div>
            );
        } else {
            return (
                <div className="form-group">
                    <textarea
                        className={this.props.className}
                        name={this.props.name}
                        id={this.props.id}
                        placeholder={this.props.placeholder}
                    ></textarea>
                </div>
            );
        }
    }
}
export default Textarea;
