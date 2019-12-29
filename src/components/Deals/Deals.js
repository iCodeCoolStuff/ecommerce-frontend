import React from 'react';

import axios from 'axios';

import Grid       from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Product from '../Product/Product';
import styles from './Deals.styles'

class Deals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      items: []
    };
  }

  getFeatured() {
    axios.get('/v1/products/featured')
      .then(res => this.setState({
        items: res.data.slice(0, 4),
        loading: false
      }))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getFeatured();
  }

  render() {
    const { classes } = this.props;

    if (this.state.loading) {
      return(<p>Loading...</p>);
    }
    return (
    <Grid container spacing={3}>
      <Grid xs={12} className={classes.title}>
        <Typography align="center" component="h5" variant="h5">
          {this.props.title || "Deals"}
        </Typography>
      </Grid>
      {this.state.items.map((item, index) =>
        <Grid key={index} item xs={6} md={4} lg={3}>
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
}

export default withStyles(styles)(Deals);