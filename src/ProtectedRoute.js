import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SignIn from './SignIn';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('starwarsmolamucho') ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
      )
    }
  />
);

export default ProtectedRoute;
