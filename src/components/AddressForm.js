import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function AddressForm(props) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={props.firstName}
            fullWidth
            autoComplete="fname"
            onChange={e => props.handleFirstNameChange(e)}
            error={props.errors ? props.errors.firstName: false}
            helperText={props.errors ? props.errors.firstName : null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value={props.lastName}
            fullWidth
            autoComplete="lname"
            onChange={e => props.handleLastNameChange(e)}
            error={props.errors ? props.errors.lastName : false}
            helperText={props.errors ? props.errors.lastName : null}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            value={props.address1}
            fullWidth
            autoComplete="billing address-line1"
            onChange={e => props.handleAddress1Change(e)}
            error={props.errors ? props.errors.address1 : false}
            helperText={props.errors ? props.errors.address1 : null}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            value={props.address2}
            fullWidth
            autoComplete="billing address-line2"
            onChange={e => props.handleAddress2Change(e)}
            error={props.errors ? props.errors.address2 : false}
            helperText={props.errors ? props.errors.address2 : null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            value={props.city}
            fullWidth
            autoComplete="billing address-level2"
            onChange={e => props.handleCityChange(e)}
            error={props.errors ? props.errors.city : false}
            helperText={props.errors ? props.errors.city: null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            value={props.region}
            fullWidth
            onChange={e => props.handleRegionChange(e)}
            error={props.errors ? props.errors.region : false}
            helperText={props.errors ? props.errors.region : null}  
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            value={props.zip}
            fullWidth
            autoComplete="billing postal-code"
            onChange={e => props.handleZipChange(e)}
            error={props.errors ? props.errors.zip : false}
            helperText={props.errors ? (props.errors.zip ? props.errors.zip[0] : null) : null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            value={props.country}
            fullWidth
            autoComplete="billing country"
            onChange={e => props.handleCountryChange(e)}
            error={props.errors ? props.errors.country : false}
            helperText={props.errors ? props.errors.country : null}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default AddressForm;