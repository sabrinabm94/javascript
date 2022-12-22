import React, { Component } from "react";

class File extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.name}></label>
                <input
                    type={this.props.type}
                    name={this.props.name}
                    accept={this.props.acept}
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}
export default File;
