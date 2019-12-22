import React from 'react';

import Grid       from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Product from '../Product/Product';
import styles from './Deals.styles'

function Deals(props) {
  const classes = styles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
      <Typography className={classes.padding} align="center" variant="h5">
        Deals
      </Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Product/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Product/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Product/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Product/>
      </Grid>
    </Grid>
  );
}

export default Deals;