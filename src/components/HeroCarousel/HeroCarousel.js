import React from 'react';

import Slider from "react-slick";
import styles from './HeroCarousel.styles';

const renderDots = dots => {
  return <ul style={{bottom: 16}}>{dots}</ul>;
};

function HeroCarousel() {
  const classes = styles();
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: renderDots
  };
  return (
    <div className={classes.root}>
      <Slider 
        {...settings}
      >
        <img src="https://via.placeholder.com/1920x600/cccccc/c0392b/&text=slide1" />
        <img src="https://via.placeholder.com/1920x600/cccccc/c0392b/&text=slide2" />
        <img src="https://via.placeholder.com/1920x600/cccccc/c0392b/&text=slide3" />
        <img src="https://via.placeholder.com/1920x600/cccccc/c0392b/&text=slide4" />
        <img src="https://via.placeholder.com/1920x600/cccccc/c0392b/&text=slide5" />
        <img src="https://via.placeholder.com/1920x600/cccccc/c0392b/&text=slide6" />
      </Slider>
    </div>
  );
}

export default HeroCarousel;