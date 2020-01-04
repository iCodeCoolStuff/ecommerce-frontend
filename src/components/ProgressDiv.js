import React from 'react';

import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginTop: 32,
  }
}));

function ProgressDiv() {
  const classes = styles();

  return (
    <Box display="flex" justifyContent="center">
      <div className={classes.root}>
        <CircularProgress  color="secondary" size="10rem"/>
      </div>
    </Box>
  );
}

export default ProgressDiv;