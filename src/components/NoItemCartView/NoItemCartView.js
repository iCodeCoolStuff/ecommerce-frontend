import React from 'react';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import styles from './NoItemCartView.styles';

function NoItemCartView(props) {
  const classes = styles();

  return (
    <Container>
      <Typography className={classes.headerMargin} component="h2" variant="h2">
        You have no items in your cart
      </Typography>
      <Typography className={classes.linkMargin}>
        Why don't you consider <Link to="/">buying some?</Link>
      </Typography>
    </Container>
  );
}

export default NoItemCartView;