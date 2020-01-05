import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Login         from './Login/Login';
import Register      from './Register/Register';
import Checkout      from './Checkout/Checkout';

import ProductDetailPage from './pages/ProductDetailPage';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';
import IndexPage from './pages/IndexPage';
import NotFoundPage from './pages/NotFoundPage';
import CheckoutErrorPage from './pages/CheckoutErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/search" component={SearchPage}/>
        <Route exact path="/product/:slug" component={ProductDetailPage}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/cart" component={CartPage}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/checkout/error" component={CheckoutErrorPage}/>
        {/*<Route exact path="/admin" component={() => window.location.href="http://localhost:8000/admin"}/>*/}
        <Route exact path="/" component={IndexPage}/>
        <Route path="*" component={NotFoundPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;