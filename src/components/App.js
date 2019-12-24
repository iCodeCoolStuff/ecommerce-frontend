import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Container from '@material-ui/core/Container';

import NavBar       from './NavBar/NavBar';
import HeroCarousel from './HeroCarousel/HeroCarousel';
import Deals        from './Deals/Deals';
import Footer       from './Footer/Footer';

import SearchResults from './SearchResults';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Container>
        <Switch>
          <Route path="/search">
            <SearchResults/>
          </Route>
          <Route path="/detail">
            <ProductDetail/>
          </Route>
          <Route path="/">
            <HeroCarousel/>
            <Deals/>
            <Deals/>
            <Deals/>
          </Route>
        </Switch>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
}

export default App;