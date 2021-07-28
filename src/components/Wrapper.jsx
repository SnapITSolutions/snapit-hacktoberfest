import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import PropTypes from "prop-types";
import Spanish from "../lang/es-US.json";
import English from "../lang/en-US.json";

export const Context = React.createContext();

// detect the language preference of the user's browser
const userLanguage = window.navigator.userLanguage || window.navigator.language;
console.log(userLanguage);

// let language;
// if (userLanguage === "en-US") {
//   language = English;
// } else {
//   language = Spanish;
// }

const Wrapper = ({ children }) => {
  const [locale, setLocale] = useState(userLanguage);
  const [messages, setMessages] = useState(English);

  function selectLang(event) {
    event.preventDefault();
    const newLocale = event.target.value;
    setLocale(newLocale);
    if (newLocale === "es-US") {
      setMessages(Spanish);
    } else {
      setMessages(English);
    }
  }

  return (
    <Context.Provider value={{ locale, selectLang }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Wrapper;
