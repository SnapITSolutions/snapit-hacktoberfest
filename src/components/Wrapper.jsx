import React from "react";
import PropTypes from "prop-types";

export const Context = React.createContext();

// detect the language preference of the user's browser
export const locale =
  window.navigator.userLanguage || window.navigator.language;

const Wrapper = ({ children }) => (
  <Context.Provider value={{ locale }}>{children}</Context.Provider>
);

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Wrapper;
