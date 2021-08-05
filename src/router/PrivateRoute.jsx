/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

// Identifies a restricted route and redirects to the login page if not authenticated.
const PrivateRoute = ({ component, ...rest }) => {
  const { user } = useAuthContext();
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
