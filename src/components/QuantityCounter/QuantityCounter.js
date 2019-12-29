import React from 'react';
import { connect } from 'react-redux';

import {
  incrementItemQuantity,
  decrementItemQuantity,
  setItemQuantity,
  removeItem
} from '../../actions/actions';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { withStyles } from '@material-ui/core/styles';

import styles from './QuantityCounter.styles';

class QuantityCounter extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMinusButtonClick = this.handleMinusButtonClick.bind(this);

    this.incrementItemQuantity = this.props.incrementItemQuantity;
    this.decrementItemQuantity = this.props.decrementItemQuantity;
    this.setItemQuantity = this.props.setItemQuantity;
    this.removeItem = this.props.removeItem;
  }

  handleInputChange(e) {
    if (isNaN(e.target.value) || e.target.value.includes('.')) {
      return;
    }

    if (Number(e.target.value) > 0) {
      this.setItemQuantity(this.props.itemId, Number(e.target.value));
    } else {
      this.removeItem(this.props.itemId);
    }
  }

  handleMinusButtonClick(e) {
    if ((this.getItemQuantity() - 1) <= 0) {
      this.removeItem(this.props.itemId);
      return;
    }

    this.decrementItemQuantity(this.props.itemId);
  }

  getItemQuantity() {
    const { items } = this.props
    return items.find(item => item.id === this.props.itemId).quantity;
  }

  render() {
    const { classes } = this.props

    return(
      <ButtonGroup>
        <Button onClick={(e) => this.handleMinusButtonClick(e)}>-</Button>
        <input onChange={this.handleInputChange} className={classes.root} value={this.getItemQuantity()}/>
        <Button onClick={(e) => this.incrementItemQuantity(this.props.itemId)}>+</Button>
      </ButtonGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.cart.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    incrementItemQuantity: id => dispatch(incrementItemQuantity(id)),
    decrementItemQuantity: id => dispatch(decrementItemQuantity(id)),
    setItemQuantity: (id, quantity) => dispatch(setItemQuantity(id, quantity)),
    removeItem: id => dispatch(removeItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(QuantityCounter));