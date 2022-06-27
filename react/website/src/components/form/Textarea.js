import React, { Component } from "react";

class Textarea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <textarea className={this.props.className} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder}></textarea>
            </div>
        )
    }
}
export default Textarea;