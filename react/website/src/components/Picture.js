import React, { Component } from "react";

class Picture extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.url) {
            let style = {
                backgroundImage: `url(${this.props.url})`
            }

            return (
                <picture className={this.props.className} alt={`Image of ${this.props.alt}`} style={style}></picture>
            )
        }
    }
}
export default Picture;