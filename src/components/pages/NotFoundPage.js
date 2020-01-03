import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Footer from '../Footer/Footer';

const styles = makeStyles(theme => ({
  notFoundTitle: {
    marginTop: 16,
    marginBottom: 16
  }
}));

function NotFoundPage() {
  const classes = styles();

  return (
    <>
    <NavBar/>
    <Container>
      <Typography className={classes.notFoundTitle} variant="h4">
        Page not found. Make sure you typed in the url correctly.
      </Typography>
    </Container>
    <Footer/>
    </>
  );
}

export default NotFoundPage;