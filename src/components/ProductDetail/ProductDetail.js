import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Rating from '@material-ui/lab/Rating';

import Recommendations from '../Recommendations/Recommendations';

import styles from './ProductDetail.styles';

function ProductDetail(props) {
  const classes = styles();

  return(
    <>
    <div className={classes.detailPadding}>
      <Grid container spacing={3}>
        <Grid item lg={6} xs={12}>
          <img style={{width: '100%'}} src="https://placehold.it/1920x1080"/>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Typography variant="h6" gutterBottom={true}>
            iRobot Roomba 670 Robot Vacuum-Wi-Fi Connectivity,
          </Typography>
          <Rating className={classes.rating} name="size-small" value={4} readOnly={true} size="small" />
          <Box className={classes.price} display="flex">
            <Typography variant="h5">
              $86.00
            </Typography>
            <Typography variant="h5" className={classes.listPrice}>
              <span className={classes.strikeOutText}>$192.00</span>
            </Typography>
          </Box>
          <Typography className={classes.description} variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor suscipit libero eos atque quia ipsa sint voluptatibus! Beatae sit assumenda asperiores iure at maxime atque repellendus maiores quia sapiente.
          </Typography>
          <Button variant="contained" size="small" color="primary">
            <Typography variant="button">
              Add to Cart <ShoppingCartIcon className={classes.cartIcon}/>
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
    <hr/>
    <Recommendations/>
    </>
  );
}

export default ProductDetail;