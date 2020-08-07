import React from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { login } from '../../actions/actions';
import { setToken, getCSRFToken } from '../../utils';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import styles from './Register.styles';

import validate from 'validate.js';
import formConstraints from './constraints';

import Copyright from '../Copyright';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formInfo: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      },
      formErrors: {},
      redirectToHome: false
    };

    this.handleFormInfoChange = this.handleFormInfoChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  validateFormInfo() {
    let errors = validate(this.state.formInfo, formConstraints);

    if (!errors) {
      errors = {};
      if (this.state.formInfo.password !== this.state.formInfo.passwordConfirmation) {
        errors.passwordConfirmation = ['Passwords must match']
      }
    }

    return errors;
  }

  handleFormInfoChange(e, key) {
    this.setState({
      ...this.state,
      formInfo: {
        ...this.state.formInfo,
        [key]: e.target.value
      }
    });
  }

  handleButtonClick(e) {
    e.preventDefault();
    let errors = this.validateFormInfo();
    this.setState({...this.state, formErrors: errors});

    if (Object.keys(errors).length > 0) return;
    this.register();
  }

  register() {
    const data = {
      first_name:            this.state.formInfo.firstName,
      last_name:             this.state.formInfo.lastName,
      email:                 this.state.formInfo.email,
      password:              this.state.formInfo.password,
      password_confirmation: this.state.formInfo.passwordConfirmation
    };

    const config = {headers: {'X-CSRFToken': getCSRFToken()}};

    axios.post('/v1/users/', data, config)
      .then(() => {
        axios.post('/v1/token/', data, config)
          .then(res => {
            setToken(res.data);
            this.props.login();
            this.setState({redirectToHome: true})
          })
          .catch(err => {
            console.error(err);
          });
      })
      .catch(err => {
        let formErrors = err.response.data;
        if (err.response.data.email) {
          formErrors['email'] = ["User with this email already exists"];
        }

        this.setState({...this.state, formErrors});
      });
  }

  render() {
    const { classes } = this.props;
    const passwordHelperText = "Passwords must be at least 8 characters long, and contain one capital letter and one number";

    return (      
      <Container component="main" maxWidth="xs">
        { this.state.redirectToHome ? <Redirect push to="/"/> : null}
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={e => this.handleFormInfoChange(e, 'firstName')}
                  error={this.state.formErrors ? this.state.formErrors.firstName : false}
                  helperText={this.state.formErrors ? this.state.formErrors.firstName : null}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={e => this.handleFormInfoChange(e, 'lastName')}
                  error={this.state.formErrors ? this.state.formErrors.lastName : false}
                  helperText={this.state.formErrors ? this.state.formErrors.lastName : null}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={e => this.handleFormInfoChange(e, 'email')}
                  error={this.state.formErrors ? this.state.formErrors.email : false}
                  helperText={this.state.formErrors ? (this.state.formErrors.email ? this.state.formErrors.email[0] : null) : null}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={e => this.handleFormInfoChange(e, 'password')}
                  error={this.state.formErrors ? this.state.formErrors.password : false}
                  helperText={this.state.formErrors ? (this.state.formErrors.password ? this.state.formErrors.password[0] : passwordHelperText) : null}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password_confirmation"
                  label="Password Confirmation"
                  type="password"
                  id="password_confirmation"
                  onChange={e => this.handleFormInfoChange(e, 'passwordConfirmation')}
                  error={this.state.formErrors ? this.state.formErrors.passwordConfirmation : false}
                  helperText={this.state.formErrors ? this.state.formErrors.passwordConfirmation : null}
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => this.handleButtonClick(e)}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }  
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(login())
  };
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Register));