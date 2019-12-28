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

import SearchResults from './SearchResults/SearchResults';
import ProductDetail from './ProductDetail/ProductDetail';
import Login         from './Login/Login';
import Register      from './Register/Register';
import CartView      from './CartView/CartView'
import Checkout      from './Checkout/Checkout';

import ProductDetailPage from './pages/ProductDetailPage';

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
        <Route path="/product/:slug" component={ProductDetailPage}/>
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
            <div style={{paddingBottom: 32}}>
              <HeroCarousel/>
              <Deals/>
              <Deals title="We're betting you'll love..."/>
              <Deals title="Save on essentials"/>
            </div>
            <Footer/>
          </Container>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;