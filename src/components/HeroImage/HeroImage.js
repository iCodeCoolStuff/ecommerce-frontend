import React from 'react';

import styles from './HeroImage.styles';

import img from '../../ecommerce-hero.png';

function HeroImage() {
  const classes = styles();

  return (
    <img alt="Save up to 20% on Roombas when your order is 50$ or more" className={classes.root} src={img}/>
  );
}

export default HeroImage;