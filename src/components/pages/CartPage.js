import React from 'react';
import { connect } from 'react-redux';

import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import CartView from '../CartView/CartView';
import NoItemCartView from '../NoItemCartView/NoItemCartView';

function CartPage({items}) {
  return(
    <>
      <NavBar/>
      {items.length > 0 ? <CartView/> : <NoItemCartView/>}
      <Footer/>
    </>
  );
}

function mapStateToProps(state) {
  return {
    items: state.cart.items
  }
}

export default connect(mapStateToProps)(CartPage);