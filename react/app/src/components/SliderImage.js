import React, { Component } from 'react';
import Slider from 'react-slick';

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <img src={this.props.image} className="image" alt={this.props.alt} />
          <img src={this.props.image} className="image" alt={this.props.alt} />
          <img src={this.props.image} className="image" alt={this.props.alt} />
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          className="slider-mini"
        >
          <div className="list-item active mini-image">
            <img src={this.props.imageMini} className="image" alt={this.props.altMini} />
          </div>
          <div className="list-item mini-image">
            <img src={this.props.imageMini} className="image" alt={this.props.altMini} />
          </div>
          <div className="list-item mini-image">
            <img src={this.props.imageMini} className="image" alt={this.props.altMini} />
          </div>
        </Slider>
      </div>
    );
  }
}
