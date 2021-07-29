import React from "react";
import { IntlProvider } from "react-intl";
import PropTypes from "prop-types";
import Spanish from "../lang/es-US.json";
import English from "../lang/en-US.json";

export const Context = React.createContext();

// detect the language preference of the user's browser
const locale = window.navigator.userLanguage || window.navigator.language;

let messages;
if (locale === "en-US") {
  messages = English;
} else {
  messages = Spanish;
}

const Wrapper = ({ children }) => (
  //     const [locale, setLocale] = useState(userLanguage);
  //     const [messages, setMessages] = useState(English);

  //     function selectLang(event) {
  //         event.preventDefault();
  //         const newLocale = event.target.value;
  //         setLocale(newLocale);
  //         console.log(newLocale)
  //         console.log(locale);
  //         if (newLocale === "es-US") {
  //             setMessages(Spanish);
  //         } else {
  //             setMessages(English);
  //             console.log(messages);
  //         }
  //     }
  //     console.log(locale);
  <Context.Provider value={{ locale }}>
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  </Context.Provider>
);

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Wrapper;
