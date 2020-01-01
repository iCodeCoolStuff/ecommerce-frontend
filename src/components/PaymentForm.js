import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function PaymentForm(props) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            value={props.name}
            fullWidth
            onChange={e => props.handleNameChange(e)}
            error={props.errors ? props.errors.name : false}
            helperText={props.errors ? props.errors.name : null}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            value={props.cardNumber}
            fullWidth
            onChange={e => props.handleCardNumberChange(e)}
            error={props.errors ? props.errors.cardNumber : false}
            helperText={props.errors ? (props.errors.cardNumber ? props.errors.cardNumber[0] : "16 digits no dashes or spaces") : "16 digits no dashes or spaces"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date (MM/YY)"
            value={props.expirationDate}
            fullWidth
            onChange={e => props.handleExpirationDateChange(e)}
            error={props.errors ? props.errors.expirationDate : false}
            helperText={props.errors ? (props.errors.expirationDate ? props.errors.expirationDate[0] : null) : null}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            value={props.cvv}
            fullWidth
            onChange={e => props.handleCVVChange(e)}
            error={props.errors ? props.errors.cvv : false}
            helperText={props.errors ? (props.errors.cvv ? props.errors.cvv[0] : "Last three digits on signature strip") : "Last three digits on signature strip"}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default PaymentForm;