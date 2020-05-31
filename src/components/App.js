import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import { connect } from 'react-redux';

import { login, logout } from '../actions/actions';

import Login         from './Login/Login';
import Register      from './Register/Register';
import Checkout      from './Checkout/Checkout';

import ProductDetailPage from './pages/ProductDetailPage';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';
import IndexPage from './pages/IndexPage';
import NotFoundPage from './pages/NotFoundPage';
import CheckoutErrorPage from './pages/CheckoutErrorPage';
import OrdersPage from './pages/OrdersPage';
import OrderDetailPage from './pages/OrderDetailPage';

import ProtectedRoute from './ProtectedRoute';
import { checkAuth } from '../utils';

function App(props) {
  if (checkAuth()) {
    props.login();
  } else {
    props.logout();
  }

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
        <ProtectedRoute exact path="/orders" component={OrdersPage}/>
        <ProtectedRoute exact path="/orders/:id" component={OrderDetailPage}/>
        {/*<Route exact path="/admin" component={() => window.location.href="http://localhost:8000/admin"}/>*/}
        <Route exact path="/" component={IndexPage}/>
        <Route path="*" component={NotFoundPage}/>
      </Switch>
    </BrowserRouter>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout())
  };
}

export default connect(null, mapDispatchToProps)(App);