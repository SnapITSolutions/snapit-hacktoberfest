import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import App from "./App";
import Wrapper from "./components/Wrapper";
import Spanish from "./lang/es-US.json";
import English from "./lang/en-US.json";

const locale = window.navigator.userLanguage || window.navigator.language;
// console.log(locale);

let messages;
if (locale === "en-US") {
  messages = English;
} else {
  messages = Spanish;
}

// const messages = {
//   first: "This is the first message"
// }

// console.log("the language is:", language.first);

ReactDOM.render(
  <React.StrictMode>
    <Wrapper>
      <IntlProvider locale={locale} messages={messages}>
        <App />
      </IntlProvider>
    </Wrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
