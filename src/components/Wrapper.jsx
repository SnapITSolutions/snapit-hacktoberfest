import React from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";
import App from "../App";
import Spanish from "../lang/es-US.json";
import English from "../lang/en-US.json";

export const Context = React.createContext();

// detect the language preference of the user's browser
export const locale =
  window.navigator.userLanguage || window.navigator.language;

let messages;
if (locale === "en-US") {
  messages = English;
} else {
  messages = Spanish;
}

const Wrapper = ({ children }) => (
  <Context.Provider value={{ locale }}>
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
    {children}
  </Context.Provider>
);

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Wrapper;
