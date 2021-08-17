/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

// Identifies a restricted route and redirects to the login page if not authenticated.
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuthContext();

  return (
    <Route
      {...rest}
      component={(props) =>
        user.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.element.isRequired,
};

export default PrivateRoute;
