import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles(theme => ({
  notFoundTitle: {
    marginTop: 16,
    marginBottom: 16
  }
}));

function ProductNotFound() {
  const classes = styles();

  return (
    <Typography className={classes.notFoundTitle} variant="h5">
      Product not found. Maybe you typed something wrong in the url bar?
    </Typography>
  );
}

export default ProductNotFound;