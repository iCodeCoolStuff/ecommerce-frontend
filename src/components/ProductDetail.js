import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Rating from '@material-ui/lab/Rating';

import Recommendations from './Recomendations/Recommendations';

function ProductDetail(props) {
  return(
    <>
    <Grid container spacing={3}>
      <Grid item lg={6} xs={12}>
        <img style={{width: '100%'}} src="https://placehold.it/1920x1080"/>
      </Grid>
      <Grid item lg={6} xs={12}>
        <Typography variant="h6">
          Item Title
        </Typography>
        <Rating name="size-small" value={4} readOnly={true} size="small" />
        <Box display="flex">
          <Typography>
            $86.00
          </Typography>
          <Typography>
            <span>$192.00</span>
          </Typography>
        </Box>
        <Typography variant="subtitle2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor suscipit libero eos atque quia ipsa sint voluptatibus! Beatae sit assumenda asperiores iure at maxime atque repellendus maiores quia sapiente.
        </Typography>
        <Button variant="contained" size="small" color="primary">
          <Typography variant="button">
            Add to Cart <ShoppingCartIcon />
          </Typography>
        </Button>
      </Grid>
    </Grid>
    <hr/>
    <Recommendations/>
    </>
  );
}

export default ProductDetail;