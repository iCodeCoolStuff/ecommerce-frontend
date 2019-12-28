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

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/search" component={SearchPage}/>
        <Route path="/product/:slug" component={ProductDetailPage}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/cart" component={CartPage}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/" component={IndexPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;