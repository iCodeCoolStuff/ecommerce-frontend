import React from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { login } from '../../actions/actions';
import { setToken, getCSRFToken } from '../../utils';

import axios from 'axios';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Copyright from '../Copyright';

import styles from './Login.styles';
import { withStyles } from '@material-ui/core/styles';

import validate from 'validate.js';
import loginConstraints from './constraints';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInfo: {
        email: '',
        password: ''
      },
      formErrors: {},
      redirectToHome: false
    };
  }

  handleLoginInfoChange(e, key) {
    this.setState({
      ...this.state,
      loginInfo: {
        ...this.state.loginInfo,
        [key]: e.target.value
      }
    });
  }

  handleButtonClick(e) {
    e.preventDefault();
    let errors = this.validateLoginInfo();
    this.setState({...this.state, formErrors: errors});

    if (Object.keys(errors).length > 0) return;
    this.login();
  }

  validateLoginInfo() {
    let errors = validate(this.state.loginInfo, loginConstraints)
    if (errors) return errors;
    return {};
  }

  login() {
    const data = {
      email:    this.state.loginInfo.email,
      password: this.state.loginInfo.password,
    };

    const config = {headers: {'X-CSRFToken': getCSRFToken()}};

    axios.post('/v1/token/', data, config)
      .then(res => {
        setToken(res.data);
        this.props.login(); //redux
        this.setState({redirectToHome: true})
      })
      .catch(err => {
        let loginErrors = err.response.data;
        if (err.response.data.detail) {
          loginErrors['email'] = ["Invalid username or password"];
        }

        this.setState({...this.state, formErrors: loginErrors});
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="xs">
        { this.state.redirectToHome ? <Redirect push to="/"/> : null}
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={e => this.handleLoginInfoChange(e, 'email')}
              error={this.state.formErrors ? this.state.formErrors.email : false}
              helperText={this.state.formErrors ? (this.state.formErrors.email ? this.state.formErrors.email[0] : null) : null}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={e => this.handleLoginInfoChange(e, 'password')}
              error={this.state.formErrors ? this.state.formErrors.password : false}
              helperText={this.state.formErrors ? (this.state.formErrors.password ? this.state.formErrors.password[0] : null) : null}
              autoComplete="current-password"
            />
            {/*<FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />*/}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => this.handleButtonClick(e)}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/*<Link href="#" variant="body2">
                  Forgot password?
                </Link>*/}
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
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

export default connect(null, mapDispatchToProps)(withStyles(styles)(Login));