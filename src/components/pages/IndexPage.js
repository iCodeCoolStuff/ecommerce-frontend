import React from 'react';

import { Container } from '@material-ui/core';

import NavBar from '../NavBar/NavBar';
import HeroCarousel from '../HeroCarousel/HeroCarousel';
import Deals from '../Deals/Deals';
import Footer from '../Footer/Footer';

function IndexPage() {
  return (
    <>
      <NavBar/>
      <Container>
        <div style={{paddingBottom: 32}}>
          <HeroCarousel/>
          <Deals/>
          <Deals title="We're betting you'll love..."/>
          <Deals title="Save on essentials"/>
        </div>
        <Footer/>
      </Container>
    </>
  );
}

export default IndexPage;