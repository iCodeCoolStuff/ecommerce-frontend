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
import Register      from './Register/Register';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/search">
            <NavBar/>
            <Container>
              <SearchResults/>
            </Container>
          </Route>
          <Route path="/detail">
            <NavBar/>
            <Container>
              <ProductDetail/>
            </Container>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/">
            <NavBar/>
            <Container>
              <HeroCarousel/>
              <Deals/>
              <Deals/>
              <Deals/>
            </Container>
          </Route>
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;