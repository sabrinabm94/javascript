import React, { Component } from "react";

class Dropdown extends Component {
    render() {
        if (this.props.children !== null && this.props.children !== undefined) {
            return (
                <ul className="dropdown">
                    <button className={`btn-secondary dropdown-toggle ${this.props.className}`} type="button" id={this.props.id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.props.buttonText}
                    </button>
                    <div className="dropdown-menu" aria-labelledby={this.props.id}>
                        {this.props.children}
                    </div>
                </ul>
            );
        }
    }
}
export default Dropdown;
