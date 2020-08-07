import React from 'react';

import {Link} from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function Orders(props) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Order #</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Total</TableCell>
            <TableCell align="left">Detail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.orders.map((order, index) => 
            <TableRow key={index}>
              <TableCell align="left">{1000000 + order.pk}</TableCell>
              <TableCell align="left">{new Date(order.order_date).toLocaleDateString()}</TableCell>
              <TableCell align="left">{`$${order.total}`}</TableCell>
              <TableCell align="left"><Link to={`/orders/${1000000 + order.pk}`}>See Detail</Link></TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );

  //return <h1>Hi</h1>;
}

export default Orders;