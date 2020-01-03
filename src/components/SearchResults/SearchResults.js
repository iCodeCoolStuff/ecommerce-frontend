import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid       from '@material-ui/core/Grid';

import Product    from '../Product/Product'; 

import styles from './SearchResults.styles';

function SearchResults(props) {
  const classes = styles();

  if (props.items.length > 0) {
    return(
      <>
        <Typography className={classes.searchTitle} variant="h4">
          Search results for {`'${props.query !== '' ? props.query : ' '}'`}
        </Typography>
        <hr/>
        <Grid className={classes.resultsGrid} container spacing="3">
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
      </>
    );
  } 
  
  return (
    <Typography className={classes.searchTitle} variant="h4">
      No items found for {`'${props.query !== '' ? props.query : ' '}'`}
    </Typography>
  );
  
}

export default SearchResults;