import React, { createContext } from "react";
import { IntlProvider } from "react-intl";
import PropTypes from "prop-types";
import useLocale from "../hooks/useLocale";

const IntlContext = createContext();

const IntlContextProvider = ({ children }) => {
  const { locale, messages } = useLocale();
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};

IntlContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { IntlContext, IntlContextProvider };
