import React from 'react';
import { connect } from 'react-redux';

import { Button, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { addItem } from '../../actions/actions';

import styles from './CartItemButton.styles';
import QuantityCounter from '../QuantityCounter/QuantityCounter';

function CartItemButton(props) {
  const classes = styles();
  const { items, addItem } = props;

  let item = items.find(item => item.product.pk === props.product.pk);

  if (item) {
    return <QuantityCounter quantity={item.quantity} itemId={item.id}></QuantityCounter>
  }

  return(
    <Button onClick={() => addItem(props.product)} variant="contained" size="small" color="primary">
      <Typography variant="button">
        Add to Cart <span className={classes.mobileHidden}><ShoppingCartIcon className={classes.cartIcon}/></span>
      </Typography>
    </Button>
  );
}

function mapStateToProps(state) {
  return {
    items: state.cart.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: product => dispatch(addItem(product))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemButton);