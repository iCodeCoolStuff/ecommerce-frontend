import React from 'react';
import { connect } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={ props => {
        if (rest.loggedIn) {
          return <Component {...props} />
        } else {
          return <Redirect to={{
            pathname: "/login"
          }} />
        }
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn
  };
}

export default connect(mapStateToProps)(ProtectedRoute);