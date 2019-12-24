import React from 'react';

import Grid       from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Product from '../Product/Product';
import styles from './Recommendations.styles'

function Recommendations(props) {
  const classes = styles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
      <Typography className={classes.padding} align="center" variant="h5">
        You might also like
      </Typography>
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <Product/>
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <Product/>
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <Product/>
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <Product/>
      </Grid>
    </Grid>
  );
}

export default Recommendations;