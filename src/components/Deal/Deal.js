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

import styles from './Deal.styles';

function Deal(props) {
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="https://placehold.it/690x800"
        title="Contemplative Reptile"
      />
      <CardContent className={classes.cardContentPadding}>
        <Typography gutterBottom variant="subtitle1">
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
        <Button variant="contained" size="medium" color="primary">
          <Typography variant="button">
            Add to Cart <ShoppingCartIcon className={classes.cartIcon}/>
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}

export default Deal;