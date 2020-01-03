import React from 'react';

import axios from 'axios';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

import styles from './ProductDetail.styles';
import CartItemButton from '../CartItemButton/CartItemButton';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      product: {}
    };
  }

  getItem() {
    axios.get(`/v1/products/${this.props.slug}`)
    .then(res => this.setState({
      loading: false,
      product: res.data
    }))
    .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.slug !== prevProps.slug) {
      this.getItem();
    }
  }

  render() {
    const { classes } = this.props;

    if (this.state.loading) {
      return(<p>Loading...</p>);
    }

    return(
      <div className={classes.detailPadding}>
        <Grid container spacing={3}>
          <Grid item lg={6} xs={12}>
            <img style={{width: '100%'}} src={this.state.product.images.img1920x1080}/>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Typography variant="h6" gutterBottom={true}>
              {this.state.product.name}
            </Typography>
            <Rating className={classes.rating} name="size-small" value={4} readOnly={true} size="small" />
            <Box className={classes.price} display="flex">
              <Typography variant="h5">
                ${this.state.product.price.toFixed(2)}
              </Typography>
              {this.state.product.on_sale ?
              <Typography variant="h5" className={classes.listPrice}>
                <span className={classes.strikeOutText}>${this.state.product.list_price.toFixed(2)}</span>
              </Typography> : null}
            </Box>
            <Typography className={classes.description} variant="body2">
              {this.state.product.description}
            </Typography>
            <div className={classes.buttonMargin}>
              <CartItemButton product={this.state.product}/>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ProductDetail);