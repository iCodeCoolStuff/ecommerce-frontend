import React from 'react';

import Grid       from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Product from '../Product/Product';
import styles from './Recommendations.styles'

function Recommendations(props) {
  const classes = styles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography className={classes.padding} align="center" variant="h5">
          You might also like
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
            product={item}/>
      </Grid>
      )}
    </Grid>
  );
}

export default Recommendations;