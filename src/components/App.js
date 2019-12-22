import React from 'react';

import Container from '@material-ui/core/Container';

import NavBar       from './NavBar/NavBar';
import HeroCarousel from './HeroCarousel/HeroCarousel';
import Deals        from './Deals/Deals';
import Footer       from './Footer/Footer';

function App() {
  return (
    <>
      <NavBar/>
      <Container>
        <HeroCarousel/>
        <Deals/>
        <Deals/>
        <Deals/>
        <Footer/>
      </Container>
    </>
  );
}

export default App;