import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <a href={this.props.link} className="link">
        <button className="button">{this.props.text}</button>
      </a>
    );
  }
}

export default Button;
