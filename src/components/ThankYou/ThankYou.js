import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import axios from 'axios'; 

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './ThankYou.styles';
import { CircularProgress } from '@material-ui/core';
import { clearItems } from '../../actions/actions';


class ThankYou extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      order: {}
    }
  }

  componentDidMount() {
    this.checkout();
  }

  checkout() {
    axios.post('/v1/orders/', this.props.data)
    .then(res => {
      this.setState({loading: false, order: res.data});
    })
    .catch(err => console.error(err.data));
  }

  render() {
    const { classes } = this.props;

    if (this.state.loading) {
      return (
        <div className={classes.circleWrapperDiv}>
          <CircularProgress size="8rem"/>
        </div>
      );
    }

    return (
      <>
        <Typography variant="h5" gutterBottom>
          Thank you for your order.
        </Typography>
        <Typography variant="subtitle1">
          Your order number is #{Number(this.state.order.pk) + 1000000}. We have emailed your order confirmation, and will
          send you an update when your order has shipped.
        </Typography>
        <Link onClick={() => this.props.clearItems()} className={classes.continueShoppingLink} to="/">Continue Shopping</Link>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearItems: () => dispatch(clearItems())
  };
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(ThankYou));