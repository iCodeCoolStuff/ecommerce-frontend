import React from 'react';

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

function CartView(props) {
  const classes = styles();
  return(
    <Container>
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

            <TableRow>
              <TableCell align="left"><img style={{maxWidth: 100}} src="https://placehold.it/100"/></TableCell>
              <TableCell align="left">iRobot Roomba 670 Robot Vacuum-Wi-Fi Connectivity,</TableCell>
              <TableCell align="left">$86</TableCell>
              <TableCell align="left">3</TableCell>
              <TableCell align="left">$258</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left"><img style={{maxWidth: 100}} src="https://placehold.it/100"/></TableCell>
              <TableCell align="left">iRobot Roomba 670 Robot Vacuum-Wi-Fi Connectivity,</TableCell>
              <TableCell align="left">$86</TableCell>
              <TableCell align="left">3</TableCell>
              <TableCell align="left">$258</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left"><img style={{maxWidth: 100}} src="https://placehold.it/100"/></TableCell>
              <TableCell align="left">iRobot Roomba 670 Robot Vacuum-Wi-Fi Connectivity,</TableCell>
              <TableCell align="left">$86</TableCell>
              <TableCell align="left">3</TableCell>
              <TableCell align="left">$258</TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
      <Box className={classes.totalBar} display="flex" justifyContent="flex-end">
        <Box className={classes.mobileHidden} flexGrow={1}/>
        <Box className={classes.totalBox}>
          <Typography variant="h6">
            Total: $258
          </Typography>
          <Button variant="contained" fullWidth={true} color="primary">
            <Typography variant="button">
              Proceed to checkout
            </Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CartView;