import React from 'react';

import axios from 'axios';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

import styles from './ProductDetail.styles';
import CartItemButton from '../CartItemButton/CartItemButton';

function ProductDetail(props) {
  const classes = styles();

  if (props.loading) {
    return(<p>Loading...</p>);
  }

  return(
    <div className={classes.detailPadding}>
      <Grid container spacing={3}>
        <Grid item lg={6} xs={12}>
          <img style={{width: '100%'}} src={props.img}/>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Typography variant="h6" gutterBottom={true}>
            {props.name}
          </Typography>
          <Rating className={classes.rating} name="size-small" value={4} readOnly={true} size="small" />
          <Box className={classes.price} display="flex">
            <Typography variant="h5">
              ${props.price}
            </Typography>
            {props.on_sale ?
            <Typography variant="h5" className={classes.listPrice}>
              <span className={classes.strikeOutText}>${props.list_price}</span>
            </Typography> : null}
          </Box>
          <Typography className={classes.description} variant="body2">
            {props.description}
          </Typography>
          <div className={classes.buttonMargin}>
            <CartItemButton product={props.product}/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductDetail;