import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid       from '@material-ui/core/Grid';

import Product    from './Product/Product'; 

function SearchResults(props) {
  return(
    <>
    <Typography variant="h4">
      Search results for 'technology'
    </Typography>
    <hr/>
    <Grid container spacing="3">
      <Grid item xs={6} md={4} lg={3}>
        <Product/>
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <Product/>
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <Product/>
      </Grid>
      <Grid item xs={6} md={4} lg={3}>
        <Product/>
      </Grid>
    </Grid>
    </>
  );
}

export default SearchResults;