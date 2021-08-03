/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../hooks/UserContext";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.

const PrivateRoute = ({ component, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.isAuthenticated ? (
          component()
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
