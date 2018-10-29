import React from 'react';
import Slider from 'react-slick';

class SliderFull extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings} className="slider-full">
        <img src={this.props.image} className="image" alt={this.props.alt} />
        <img src={this.props.image} className="image" alt={this.props.alt} />
      </Slider>
    );
  }
}

export default SliderFull;
