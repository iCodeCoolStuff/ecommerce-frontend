import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Footer from '../Footer/Footer';

const styles = makeStyles(theme => ({
  errorTitle: {
    marginTop: 16,
    marginBottom: 16
  },
  linkMargin: {
    marginTop: 16,
    marginLeft: 8,
    marginBottom: 32
  }
}));

function NotFoundPage() {
  const classes = styles();

  return (
    <>
    <NavBar/>
    <Container>
      <Typography className={classes.errorTitle} variant="h4">
        You can't check out before you buy items.
      </Typography>
      <Typography className={classes.linkMargin}>
        <Link to="/">Return to home page</Link>
      </Typography>
    </Container>
    <Footer/>
    </>
  );
}

export default NotFoundPage;