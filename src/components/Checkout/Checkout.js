import React from 'react';

import { connect } from 'react-redux';

import { Link, Redirect } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import Link from '@material-ui/core/Link';

import validate from 'validate.js';

import AddressForm from '../AddressForm';
import Copyright from '../Copyright';
import PaymentForm from '../PaymentForm';
import Review from '../Review';

import { withStyles } from '@material-ui/core/styles';

import styles from './Checkout.styles';
import { shippingConstraints, creditConstraints } from './constraints';
import ThankYou from '../ThankYou/ThankYou';

class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.steps = ['Shipping address', 'Payment details', 'Review your order'];

    this.state = {
      activeStep: 0,
      shippingInfo: {
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        region: '',
        zip: '',
        country: '',
      },
      creditInfo: {
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvv: ''
      },
      shippingErrors: {},
      creditErrors: {}
    };

    this.handleNext = () => {
      let errors;

      switch(this.state.activeStep) {
        case 0:
          errors = this.validateShippingInfo();
          this.setState({...this.state, shippingErrors: errors});
          break;
        case 1:
          errors = this.validateCreditInfo();
          this.setState({...this.state, creditErrors: errors});
          break;
        case 2:
          break;
        default:
          console.log("invalid step");
          return;
      }
      if (errors) return;

      this.setState({activeStep: this.state.activeStep + 1});
    };

    this.handleBack = () => {
      this.setState({activeStep: this.state.activeStep - 1});
    };

    this.handleShippingInfoChange = this.handleShippingInfoChange.bind(this);
  }

  handleShippingInfoChange(e, key) {
    this.setState({
      ...this.state,
      shippingInfo: {
        ...this.state.shippingInfo,
        [key]: e.target.value
      }
    });
  }

  handleCreditInfoChange(e, key) {
    this.setState({
      ...this.state,
      creditInfo: {
        ...this.state.creditInfo,
        [key]: e.target.value
      }
    });
  }

  validateShippingInfo() {
    return validate(this.state.shippingInfo, shippingConstraints);
  }

  validateCreditInfo() {
    return validate(this.state.creditInfo, creditConstraints);
  }

  getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm
            handleFirstNameChange={e => this.handleShippingInfoChange(e, 'firstName')}
            handleLastNameChange={e => this.handleShippingInfoChange(e, 'lastName')}
            handleAddress1Change={e => this.handleShippingInfoChange(e, 'address1')}
            handleAddress2Change={e => this.handleShippingInfoChange(e, 'address2')}
            handleCityChange={e => this.handleShippingInfoChange(e, 'city')}
            handleRegionChange={e => this.handleShippingInfoChange(e, 'region')}
            handleZipChange={e => this.handleShippingInfoChange(e, 'zip')}
            handleCountryChange={e => this.handleShippingInfoChange(e, 'country')}

            firstName={this.state.shippingInfo.firstName}
            lastName={this.state.shippingInfo.lastName}
            address1={this.state.shippingInfo.address1}
            address2={this.state.shippingInfo.address2}
            city={this.state.shippingInfo.city}
            region={this.state.shippingInfo.region}
            zip={this.state.shippingInfo.zip}
            country={this.state.shippingInfo.country}

            errors={this.state.shippingErrors}
          />);
      case 1:
        return (
          <PaymentForm
            handleNameChange={e => this.handleCreditInfoChange(e, 'name')}
            handleCardNumberChange={e => this.handleCreditInfoChange(e, 'cardNumber')}
            handleExpirationDateChange={e => this.handleCreditInfoChange(e, 'expirationDate')}
            handleCVVChange={e => this.handleCreditInfoChange(e, 'cvv')}

            name={this.state.creditInfo.name}
            cardNumber={this.state.creditInfo.cardNumber}
            expirationDate={this.state.creditInfo.expirationDate}
            cvv={this.state.creditInfo.cvv}

            errors={this.state.creditErrors}
          />);
      case 2:
        return (
        <Review
          firstName={this.state.shippingInfo.firstName}
          lastName={this.state.shippingInfo.lastName}
          address1={this.state.shippingInfo.address1}
          address2={this.state.shippingInfo.address2}
          city={this.state.shippingInfo.city}
          region={this.state.shippingInfo.region}
          zip={this.state.shippingInfo.zip}
          country={this.state.shippingInfo.country}

          name={this.state.creditInfo.name}
          cardNumber={this.state.creditInfo.cardNumber}
          expirationDate={this.state.creditInfo.expirationDate}
        />);
      default:
        throw new Error('Unknown step');
    }
  }

  render() {
    const { classes } = this.props;

    if (this.props.items.length === 0) {
      return <Redirect to="/checkout/error"/>
    }

    return (
      <>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              <Link className={classes.headerLink} to="/">Ecommerce Website</Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={this.state.activeStep} className={classes.stepper}>
              {this.steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <>
              {this.state.activeStep === this.steps.length ? (
                <ThankYou
                  data={{
                    ...this.state.shippingInfo,
                    first_name: this.state.shippingInfo.firstName,
                    last_name: this.state.shippingInfo.lastName,
                    items: this.props.items.map(i => ({product_id: i.product.pk, quantity: i.quantity}))
                  }}
                />
              ) : (
                <>
                  {this.getStepContent(this.state.activeStep)}
                  <div className={classes.buttons}>
                    {this.state.activeStep !== 0 && (
                      <Button onClick={this.handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {this.state.activeStep === this.steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </div>
                </>
              )}
            </>
          </Paper>
          <Copyright />
        </main>
      </>
    );
  }  
}

function mapStateToProps(state) {
  return {
    items: state.cart.items
  };
}

export default connect(mapStateToProps)(withStyles(styles)(Checkout));