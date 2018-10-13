import React, { Component } from "react";
import Slider from "react-slick";
import Img1 from '../Img/pexels-photo-940271.jpeg';
import Img2 from '../Img/pexels-photo-220421.jpeg';
import Img3 from '../Img/pexels-photo-355863.jpeg'

class Carousel extends Component {
   SampleNextArrow=(props)=>{
    const { style } = props;
    return (
      <div
        style={{ ...style, display: "none"}}
      />
    );
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            position:'initial',
            width:'100%'
          }}
        >
          <ul> {dots} </ul>
        </div>
      ),
      nextArrow:<this.SampleNextArrow/>
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={Img1} alt="Smiley face" className='Carousel--img'/>
          </div>
          <div>
            <img src={Img2} alt="Smiley face" className='Carousel--img'/>
          </div>
          <div>
            <img src={Img3} alt="Smiley face" className='Carousel--img'/>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;