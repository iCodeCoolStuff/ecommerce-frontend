import React from 'react';

import { Link } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CartItemButton from '../CartItemButton/CartItemButton';
import Typography from '@material-ui/core/Typography';

import Rating from '@material-ui/lab/Rating';

import ProductBadge from '../ProductBadge';
import styles from './Product.styles';

function Product(props) {
  const classes = styles();

  return (
    <ProductBadge badgeContent="New" color="secondary" invisible={!props.new} anchorOrigin={{vertical: 'top', horizontal: 'left'}}>
      <Card className={classes.card}>
        <Link to={`/product/${props.slug}`}>
          <CardMedia
            className={classes.media}
            image={props.img}
          />
        </Link>
        <CardContent className={classes.cardContentPadding}>
          <Typography gutterBottom variant="body2">
            {props.name.length > 70 ? props.name.slice(0, 69) + "..." : props.name}
          </Typography>
          <Rating name="size-small" value={4} readOnly={true} size="small" />
          <Box display="flex" className={classes.priceBox}>
            <Typography>
              ${props.price.toFixed(2)}
            </Typography>
            {props.onSale ?
              <Typography className={classes.listPrice}>
                <span className={classes.strikeOutText}>${props.listPrice.toFixed(2)}</span>
              </Typography> : null}
          </Box>
        </CardContent>
        <CardActions>
          <CartItemButton product={props.product}/>
        </CardActions>
      </Card>
    </ProductBadge>
  );
}

export default Product;