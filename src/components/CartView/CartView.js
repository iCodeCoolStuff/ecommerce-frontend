import React from 'react';
import { connect } from 'react-redux';

import { removeItem } from '../../actions/actions';


import { Redirect } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import styles from './CartView.styles';
import { Typography } from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import QuantityCounter from '../QuantityCounter/QuantityCounter';

function CartView (props) {
  const classes = styles();

  let [redirect, setRedirect] = React.useState(false);

  const handleClick = () => {
    setRedirect(true);
  }

  return(
    <Container>
      {redirect ? <Redirect push to="/checkout"/> : null}
      <TableContainer className={classes.table} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Picture</TableCell>
              <TableCell align="left">Item</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {props.items.map((item, index) =>
              <TableRow key={index}>
                <TableCell style={{position: "relative"}} align="left">
                  <img style={{maxWidth: 100}} src={item.product.images.img100x100}/>
                  <Button variant="contained" color="secondary" className={classes.xButton} onClick={(e) => props.removeItem(item.id)}><CloseIcon/></Button>
                </TableCell>
                <TableCell align="left">{item.product.name}</TableCell>
                <TableCell align="left">${item.product.price.toFixed(2)}</TableCell>
                <TableCell align="left">
                  <QuantityCounter itemId={item.id}/>
                </TableCell>
                <TableCell align="left">${(item.product.price * item.quantity).toFixed(2)}</TableCell>
              </TableRow>
            )}

          </TableBody>
        </Table>
      </TableContainer>
      <Box className={classes.totalBar} display="flex" justifyContent="flex-end">
        <Box className={classes.mobileHidden} flexGrow={1}/>
        <Box className={classes.totalBox}>
          <Typography variant="h6">
            Total: ${props.items.map(i => i.product.price * i.quantity).reduce((s, v) => s+v, 0).toFixed(2)}
          </Typography>
            <Button variant="contained" fullWidth={true} color="primary" onClick={() => handleClick()}>
              <Typography variant="button">
                Proceed to checkout
              </Typography>
            </Button>
        </Box>
      </Box>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    items: state.cart.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeItem: id => dispatch(removeItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartView);