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
import ProductDetail from './ProductDetail/ProductDetail';
import Login         from './Login/Login';
import Register      from './Register/Register';
import CartView      from './CartView/CartView'
import Checkout      from './Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search">
          <NavBar/>
          <Container>
            <SearchResults/>
            <Footer/>
          </Container>
        </Route>
        <Route path="/detail">
          <NavBar/>
          <Container>
            <ProductDetail/>
            <Footer/>
          </Container>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/cart">
          <NavBar/>
          <CartView/>
          <Footer/>
        </Route>
        <Route path="/checkout">
          <Checkout/>
        </Route>
        <Route path="/">
          <NavBar/>
          <Container>
            <HeroCarousel/>
            <Deals/>
            <Deals/>
            <Deals/>
            <Footer/>
          </Container>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;