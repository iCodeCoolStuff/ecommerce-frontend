import React from 'react';

import Container from '@material-ui/core/Container';

import NavBar       from './NavBar/NavBar';
import HeroCarousel from './HeroCarousel/HeroCarousel';
import Deals        from './Deals/Deals';

function App() {
  return (
    <>
      <NavBar/>
      <Container>
        <HeroCarousel/>
        <Deals/>
      </Container>
    </>
  );
}

export default App;