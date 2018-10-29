import React, { Component } from 'react';

class ButtonGrey extends Component {
  render() {
    return (
      <a href={this.props.link} className="link">
        <button className="button grey">{this.props.text}</button>
      </a>
    );
  }
}

export default ButtonGrey;
