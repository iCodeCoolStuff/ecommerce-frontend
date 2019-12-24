import React from 'react';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Rating from '@material-ui/lab/Rating';

import ProductBadge from '../ProductBadge';
import styles from './Product.styles';

function Product(props) {
  const classes = styles();

  return (
    <ProductBadge badgeContent="New" color="secondary" anchorOrigin={{vertical: 'top', horizontal: 'left'}}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://placehold.it/690x800"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContentPadding}>
          <Typography gutterBottom variant="body2">
            iRobot Roomba 670 Robot Vacuum-Wi-Fi Connectivity,
          </Typography>
          <Rating name="size-small" value={4} readOnly={true} size="small" />
          <Box display="flex" className={classes.priceBox}>
            <Typography>
              $86.00
            </Typography>
            <Typography className={classes.listPrice}>
              <span className={classes.strikeOutText}>$192.00</span>
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" color="primary">
            <Typography variant="body2">
              Add to Cart <span className={classes.mobileHidden}><ShoppingCartIcon className={classes.cartIcon}/></span>
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </ProductBadge>
  );
}

export default Product;