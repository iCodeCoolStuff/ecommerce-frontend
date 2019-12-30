import React from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/button';
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

function CartView ({items}) {
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

            {items.map((item, index) =>
              <TableRow key={index}>
                <TableCell align="left"><img style={{maxWidth: 100}} src={item.product.images.img100x100}/></TableCell>
                <TableCell align="left">{item.product.name}</TableCell>
                <TableCell align="left">${item.product.price.toFixed(2)}</TableCell>
                <TableCell align="left">{item.quantity}</TableCell>
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
            Total: ${items.map(i => i.product.price * i.quantity).reduce((s, v) => s+v, 0).toFixed(2)}
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

export default connect(mapStateToProps)(CartView);