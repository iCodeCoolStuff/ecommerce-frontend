import React from 'react';

import Grid       from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Product from '../Product/Product';
import styles from './Deals.styles'

function Deals (props) {
  const classes = styles();

  return (
  <Grid container spacing={3}>
    <Grid xs={12} className={classes.title}>
      <Typography align="center" component="h5" variant="h5">
        {props.title || "Deals"}
      </Typography>
    </Grid>
    {props.items.map((item, index) =>
      <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
        <Product
          name={item.name}
          price={item.price}
          description={item.description}
          listPrice={item.list_price}
          onSale={item.on_sale}
          new={item.new}
          img={item.images.img690x400}
          slug={item.slug}
          product={item}
        />
      </Grid>
    )}
  </Grid>
  );
}

export default Deals;