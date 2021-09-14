import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import useProvideAuth from "../hooks/useProvideAuth";

const AuthContext = createContext();

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within AuthContextProvider");
  }

  return context;
};

const AuthContextProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { useAuthContext, AuthContextProvider };
