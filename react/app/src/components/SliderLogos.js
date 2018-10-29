import React from 'react';
import Slider from 'react-slick';

class SliderLogos extends React.Component {
  render() {
    var settings = {
      dots: false,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Slider {...settings}>
        <img className="image" src={this.props.logo} alt={this.props.alt} />
        <img className="image" src={this.props.logo} alt={this.props.alt} />
        <img className="image" src={this.props.logo} alt={this.props.alt} />
        <img className="image" src={this.props.logo} alt={this.props.alt} />
        <img className="image" src={this.props.logo} alt={this.props.alt} />
        <img className="image" src={this.props.logo} alt={this.props.alt} />
      </Slider>
    );
  }
}

export default SliderLogos;
