import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

function Review(props) {
  const classes = useStyles();

  const { items, total } = props;
  const addressInfo = [
    props.address1,
    props.address2,
    props.city,
    props.region,
    props.zip,
    props.country
  ];

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {items.map((item, index) => (
          <ListItem className={classes.listItem} key={index}>
            <ListItemText primary={item.product.name}/>
            <Typography variant="body2">{(item.product.price * item.quantity).toFixed(2)}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${total.toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{`${props.firstName} ${props.lastName}`}</Typography>
          <Typography gutterBottom>{addressInfo.filter(v => v !== '').join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Card Holder</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{props.name}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Card Number</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography noWrap={false} gutterBottom>
                {`****-****-****-${props.cardNumber.slice(12, 16)}`}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Expiry Date</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{props.expirationDate}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

function mapStateToProps(state) {
  return {
    items: state.cart.items,
    total: state.cart.total
  };
}

export default connect(mapStateToProps)(Review);